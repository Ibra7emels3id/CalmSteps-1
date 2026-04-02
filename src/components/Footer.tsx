import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

/**
 * Footer Component
 * Design Philosophy: Clean, organized information architecture
 * - Multiple sections for services, company info, and contact
 * - Social media links
 * - RTL layout support
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-slate text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-soft-green">
              خطوات الهدوء
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              خدمات مساج احترافية للرجال بأعلى معايير الجودة والنظافة في الرياض.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-soft-green">الروابط</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-soft-green transition-colors cursor-pointer">
                    الرئيسية
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-soft-green transition-colors cursor-pointer">
                    من نحن
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-300 hover:text-soft-green transition-colors cursor-pointer">
                    الخدمات
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <span className="text-gray-300 hover:text-soft-green transition-colors cursor-pointer">
                    الأسعار
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-soft-green">القانوني</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">
                  <span className="text-gray-300 hover:text-soft-green transition-colors cursor-pointer">
                    سياسة الخصوصية
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions">
                  <span className="text-gray-300 hover:text-soft-green transition-colors cursor-pointer">
                    شروط الاستخدام
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="tel:+966500000000"
                  className="text-gray-300 hover:text-soft-green transition-colors"
                >
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-soft-green">اتصل بنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-soft-green" />
                <a
                  href="tel:+966500000000"
                  className="text-gray-300 hover:text-soft-green transition-colors text-sm"
                >
                  +966 50 000 0000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-soft-green" />
                <a
                  href="mailto:info@khotawat.com"
                  className="text-gray-300 hover:text-soft-green transition-colors text-sm"
                >
                  info@khotawat.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-soft-green flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  الرياض، المملكة العربية السعودية
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} خطوات الهدوء. جميع الحقوق محفوظة.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-soft-green transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-soft-green transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-soft-green transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
