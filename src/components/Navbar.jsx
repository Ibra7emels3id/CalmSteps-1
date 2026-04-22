import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../public/img/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [location] = useLocation();

    const whatsappNumber = "966578656379"; // بدون +
    const message = encodeURIComponent("مرحبا، أود الاستفسار عن خدماتكم");

    const navLinks = [
        { href: "/", label: "الرئيسية" },
        { href: "/about", label: "من نحن" },
        { href: "/pricing", label: "الباقات" },
        { href: "/services", label: "الخدمات" },
        { href: "/branches", label: "الفروع" },
        { href: "/contact", label: "اتصل بنا" },
    ];

    // 🔥 حل مشكلة scroll
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <nav className="sticky top-0 z-50 bg-beige border-b border-soft-gray shadow-md">
            <div className="container">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/">
                        <a className="flex items-center">
                            <img src={logo} alt="logo" className="w-32" />
                        </a>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <a className="text-dark-slate hover:text-soft-green transition font-medium">
                                    {link.label}
                                </a>
                            </Link>
                        ))}
                    </div>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-block btn-primary text-sm"
                    >
                        احجز الآن
                    </a>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 hover:bg-soft-gray rounded-lg"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden pb-4 border-t"
                    >
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <a
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 hover:bg-soft-gray"
                                >
                                    {link.label}
                                </a>
                            </Link>
                        ))}

                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${message}`}
                            target="_blank"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 btn-primary text-center"
                        >
                            احجز الآن
                        </a>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}