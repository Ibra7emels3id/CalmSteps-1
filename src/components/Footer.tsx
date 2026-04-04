import { Link } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const paymentImages = [
    "mada_mini.png",
    "credit_card_mini.png",
    "stc_pay_mini.png",
    "apple_pay_mini.png",
    "tabby_installment_mini.png",
    "tamara_installment_mini.png",
    "mispay_installment_mini.png",
    "customer_wallet_mini.png",
  ];

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

        {/* Link Payments */}
        <div className="flex flex-col md:flex-row  justify-between gap-4">
          <div className="flex">
            <ul className="flex flex-wrap gap-3 items-center justify-center">
              {paymentImages.map((img, index , title) => (
                <li
                  key={index}
                  className="s-payments-list-item bg-green-50 rounded-lg p-1"
                >
                  <img
                    src={`https://cdn.salla.network/images/payment/${img}`}
                    alt={img}
                    className="w-[40px] h-[40px] object-contain hover:scale-110 transition duration-300"
                    loading="lazy"
                    title={img.split("_mini")[0].replace(/_/g, " ")}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="flex items-center justify-center gap-3 text-green-50">
              <img
                src="https://cdn.salla.network/images/commercial-register.png"
                alt="السجل التجاري"
                className="w-[55px] h-[55px] object-contain"
              />

              <div className="flex flex-col text-right">
                <p className="text-sm">السجل التجاري</p>
                <b className="text-lg">1010359452</b>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              {/* Certificate */}
              <a
                href="https://eauthenticate.saudibusiness.gov.sa/certificate-details/0000004926"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
              >
                <img
                  src="https://cdn.salla.network/images/sbc.png"
                  alt="certificate"
                  className="w-16 h-16 object-contain hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </a>

              {/* Tax Number */}
              <div className="flex flex-col items-center gap-1 text-green-50">
                <p className="text-sm">الرقم الضريبي</p>
                <b className="text-lg">310218485500003</b>
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
