import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../public/img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+966578656379";
  const message = encodeURIComponent("مرحبا، أود الاستفسار عن خدماتكم");

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/services", label: "الخدمات" },
    { href: "/pricing", label: "الأسعار" },
    { href: "/branches", label: "الفروع" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-beige border-b border-soft-gray"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className=" flex items-center justify-center">
                <img src={logo} alt="" className="w-32" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-dark-slate hover:text-soft-green transition-colors duration-300 font-medium cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden md:inline-block btn-primary text-sm cursor-pointer">
              احجز الآن
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-soft-gray rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-dark-slate" />
            ) : (
              <Menu className="w-6 h-6 text-dark-slate" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pb-4 border-t border-soft-gray"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-dark-slate hover:bg-soft-gray rounded-lg transition-colors cursor-pointer"
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/booking">
                <span
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 btn-primary text-center text-sm cursor-pointer"
                >
                  احجز الآن
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
