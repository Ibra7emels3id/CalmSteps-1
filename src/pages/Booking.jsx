import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import { Calendar, Clock, User, Phone, Check, X, CreditCard } from "lucide-react";


export default function Booking() {
    const [selectedPackages, setSelectedPackages] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        branch: "",
        date: "",
        time: "",
        notes: "",
    });

    const packages = [
        {
            id: "royal",
            name: "الباقة الملكية",
            price: 899,
            originalPrice: 1045,
            description: "الباقة الفاخرة الشاملة",
            icon: "👑",
        },
        {
            id: "calm",
            name: "باقة الهدوء",
            price: 699,
            originalPrice: 850,
            description: "الباقة المتوازنة",
            icon: "🌿",
        },
        {
            id: "levit",
            name: "باقة الحيوية",
            price: 499,
            originalPrice: 670,
            description: "الباقة الأساسية المميزة",
            icon: "⚡",
        },
        {
            id: "senses",
            name: "باقة الحواس",
            price: 299,
            originalPrice: 375,
            description: "الباقة الاقتصادية",
            icon: "✨",
        },
    ];

    const services = [
        // المساج
        { id: "massage-1", category: "المساج", name: "كالم فيوجن 1:30", price: 345 },
        { id: "massage-2", category: "المساج", name: "كالم فيوجن 1:00", price: 300 },
        { id: "massage-3", category: "المساج", name: "مساج تايلندي", price: 250 },
        { id: "massage-4", category: "المساج", name: "مساج سويدي", price: 220 },
        { id: "massage-5", category: "المساج", name: "مساج سياتشو", price: 220 },
        { id: "massage-6", category: "المساج", name: "مساج رفليكسولوجي", price: 200 },
        // الحمام المغربي
        { id: "bath-1", category: "الحمام المغربي", name: "الحمام الملكي بزيت الأرجان", price: 350 },
        { id: "bath-2", category: "الحمام المغربي", name: "الحمام المغربي بالأعشاب المعطرة", price: 250 },
        { id: "bath-3", category: "الحمام المغربي", name: "الحمام المغربي الطبيعي", price: 200 },
        // البديكير
        { id: "pedi-1", category: "البديكير", name: "بديكير لليدين والقدمين مع فوت سبا مساج", price: 350 },
        { id: "pedi-2", category: "البديكير", name: "بديكير لليدين والقدمين مع فوت سبا", price: 280 },
        { id: "pedi-3", category: "البديكير", name: "بديكير لليدين والقدمين", price: 220 },
        { id: "pedi-4", category: "البديكير", name: "بديكير لليدين", price: 150 },
        { id: "pedi-5", category: "البديكير", name: "بديكير للقدمين", price: 150 },
        // الجاكوزي
        { id: "jacuzzi-1", category: "الجاكوزي", name: "جلسة جاكوزي استرخاء", price: 70 },
        // الحلاقة والعناية
        { id: "barber-1", category: "الحلاقة والعناية", name: "حلاقة رجالية كلاسيكية", price: 50 },
        { id: "barber-2", category: "الحلاقة والعناية", name: "حلاقة فيد", price: 60 },
        { id: "barber-3", category: "الحلاقة والعناية", name: "حلاقة بوي", price: 55 },
        { id: "barber-4", category: "الحلاقة والعناية", name: "حلاقة أمريكية", price: 65 },
        { id: "barber-5", category: "الحلاقة والعناية", name: "حلاقة إيطالية", price: 70 },
        { id: "barber-6", category: "الحلاقة والعناية", name: "حلاقة موهوك", price: 75 },
        { id: "barber-7", category: "الحلاقة والعناية", name: "حلاقة ديزاينر", price: 80 },
        { id: "barber-8", category: "الحلاقة والعناية", name: "حلاقة بيرت", price: 65 },
        { id: "barber-9", category: "الحلاقة والعناية", name: "تنظيف اللحية والشنب", price: 40 },
        { id: "barber-10", category: "الحلاقة والعناية", name: "حلاقة + تنظيف لحية", price: 80 },
        { id: "barber-11", category: "الحلاقة والعناية", name: "صبغ الشعر", price: 100 },
        { id: "barber-12", category: "الحلاقة والعناية", name: "صبغ اللحية", price: 60 },
        { id: "barber-13", category: "الحلاقة والعناية", name: "فرد الشعر الكيراتين", price: 150 },
        { id: "barber-14", category: "الحلاقة والعناية", name: "علاج الشعر بالبروتين", price: 120 },
    ];

    const branches = [
        { id: "riyadh-1", name: "الرياض - حي النخيل" },
        { id: "riyadh-2", name: "الرياض - حي الملز" },
        { id: "riyadh-3", name: "الرياض - حي العليا" },
        { id: "jeddah", name: "جدة - حي الروضة" },
        { id: "dammam", name: "الدمام - حي الخليج" },
    ];

    const timeSlots = [
        "09:00", "10:00", "11:00", "12:00", "14:00",
        "15:00", "16:00", "17:00", "18:00", "19:00",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }; 

    const togglePackage = (packageId) => {
        setSelectedPackages((prev) =>
            prev.includes(packageId)
                ? prev.filter((id) => id !== packageId)
                : [...prev, packageId]
        );
    };

    const toggleService = (serviceId) => {
        setSelectedServices((prev) =>
            prev.includes(serviceId)
                ? prev.filter((id) => id !== serviceId)
                : [...prev, serviceId]
        );
    };

    const calculateTotal = () => {
        let total = 0;
        selectedPackages.forEach((pkgId) => {
            const pkg = packages.find((p) => p.id === pkgId);
            if (pkg) total += pkg.price;
        });
        selectedServices.forEach((svcId) => {
            const svc = services.find((s) => s.id === svcId);
            if (svc) total += svc.price;
        });
        return total;
    };

    const handlePaymentWithGeidea = async () => {
        if (selectedPackages.length === 0 && selectedServices.length === 0) {
            alert("الرجاء اختيار باقة أو خدمة واحدة على الأقل");
            return;
        }

        if (!formData.name || !formData.phone || !formData.branch || !formData.date || !formData.time) {
            alert("الرجاء ملء جميع الحقول المطلوبة");
            return;
        }

        const total = calculateTotal();
        const orderId = `booking-${Date.now()}`;

        try {
            setSubmitted(true);

            // Prepare booking data
            const bookingData = {
                name: formData.name,
                phone: formData.phone,
                branch: formData.branch,
                date: formData.date,
                time: formData.time,
                notes: formData.notes,
                packages: selectedPackages,
                services: selectedServices,
                total: total,
                orderId: orderId,
                timestamp: new Date().toISOString(),
            };

            // Store booking data in session for post-payment processing
            sessionStorage.setItem("pendingBooking", JSON.stringify(bookingData));

            // Call backend to initiate payment with Geidea
            const response = await fetch("/api/trpc/payment.initiatePayment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    json: {
                        amount: total,
                        orderId: orderId,
                        customerName: formData.name,
                        customerPhone: formData.phone,
                        description: `Spa Booking - ${formData.branch}`,
                    },
                }),
            });

            const data = await response.json();

            if (data.result?.data?.paymentUrl) {
                // Redirect to Geidea hosted payment page
                window.location.href = data.result.data.paymentUrl;
            } else {
                throw new Error("Failed to get payment URL");
            }
        } catch (error) {
            console.error("Payment error:", error);
            setSubmitted(false);
            alert("حدث خطأ في معالجة الدفع. يرجى المحاولة مرة أخرى.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePaymentWithGeidea();
    };

    const servicesByCategory = services.reduce((acc, service) => {
        if (!acc[service.category]) {
            acc[service.category] = [];
        }
        acc[service.category].push(service);
        return acc;
    }, {});

    return (
        <MainLayout>
            <Helmet>
                <title>{seoConfig.booking.title}</title>
                <meta name="description" content={seoConfig.booking.description} />
                <meta name="keywords" content={seoConfig.booking.keywords} />
            </Helmet>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-beige to-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl font-bold text-dark-slate mb-6">
                            احجز جلستك
                        </h1>
                        <p className="text-xl text-dark-slate/70 leading-relaxed">
                            اختر الباقات والخدمات المناسبة لك وحدد موعدك المفضل
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="bg-beige rounded-lg p-8 shadow-soft space-y-8"
                    >
                        {/* Success Message */}
                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-soft-green text-white rounded-lg text-center"
                            >
                                <p className="font-semibold">جاري معالجة الدفع...</p>
                                <p className="text-sm mt-1">سيتم تحويلك إلى بوابة الدفع</p>
                            </motion.div>
                        )}

                        {/* Packages Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-dark-slate mb-4">
                                اختر الباقات (اختياري)
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {packages.map((pkg) => (
                                    <button
                                        key={pkg.id}
                                        type="button"
                                        onClick={() => togglePackage(pkg.id)}
                                        className={`p-4 rounded-lg border-2 transition-all text-right ${selectedPackages.includes(pkg.id)
                                            ? "border-soft-green bg-soft-green/10"
                                            : "border-soft-gray bg-white hover:border-soft-green/50"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-bold text-dark-slate text-lg">
                                                    {pkg.icon} {pkg.name}
                                                </p>
                                                <p className="text-sm text-dark-slate/60 mt-1">
                                                    {pkg.description}
                                                </p>
                                                <p className="font-bold text-soft-green mt-2">
                                                    {pkg.price} ر.س
                                                </p>
                                            </div>
                                            <div
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedPackages.includes(pkg.id)
                                                    ? "bg-soft-green border-soft-green"
                                                    : "border-soft-gray"
                                                    }`}
                                            >
                                                {selectedPackages.includes(pkg.id) && (
                                                    <Check className="w-4 h-4 text-white" />
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Services Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                        >
                            <h2 className="text-2xl font-bold text-dark-slate mb-4">
                                اختر الخدمات الإضافية (اختياري)
                            </h2>
                            <div className="space-y-6">
                                {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                                    <div key={category}>
                                        <h3 className="text-lg font-semibold text-soft-green mb-3">
                                            {category}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {categoryServices.map((service) => (
                                                <button
                                                    key={service.id}
                                                    type="button"
                                                    onClick={() => toggleService(service.id)}
                                                    className={`p-3 rounded-lg border-2 transition-all text-right flex items-center justify-between ${selectedServices.includes(service.id)
                                                        ? "border-soft-green bg-soft-green/10"
                                                        : "border-soft-gray bg-white hover:border-soft-green/50"
                                                        }`}
                                                >
                                                    <div>
                                                        <p className="font-semibold text-dark-slate">
                                                            {service.name}
                                                        </p>
                                                        <p className="text-sm text-soft-green font-bold">
                                                            {service.price} ر.س
                                                        </p>
                                                    </div>
                                                    <div
                                                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedServices.includes(service.id)
                                                            ? "bg-soft-green border-soft-green"
                                                            : "border-soft-gray"
                                                            }`}
                                                    >
                                                        {selectedServices.includes(service.id) && (
                                                            <Check className="w-3 h-3 text-white" />
                                                        )}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Price Summary */}
                        {(selectedPackages.length > 0 || selectedServices.length > 0) && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-4 bg-white rounded-lg border-2 border-soft-green"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-dark-slate">
                                        السعر الإجمالي:
                                    </span>
                                    <span className="text-3xl font-bold text-soft-green">
                                        {calculateTotal()} ر.س
                                    </span>
                                </div>
                            </motion.div>
                        )}

                        {/* Customer Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold text-dark-slate">
                                بيانات التواصل
                            </h2>

                            {/* Name Field */}
                            <div>
                                <label className="block text-dark-slate font-semibold mb-2">
                                    <User className="inline-block w-5 h-5 ml-2 text-soft-green" />
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                                    placeholder="أدخل اسمك الكامل"
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label className="block text-dark-slate font-semibold mb-2">
                                    <Phone className="inline-block w-5 h-5 ml-2 text-soft-green" />
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                                    placeholder="05xxxxxxxx"
                                />
                            </div>

                            {/* Branch Selection */}
                            <div>
                                <label className="block text-dark-slate font-semibold mb-2">
                                    📍 اختر الفرع
                                </label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                                >
                                    <option value="">اختر الفرع</option>
                                    {branches.map((branch) => (
                                        <option key={branch.id} value={branch.name}>
                                            {branch.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Date Field */}
                            <div>
                                <label className="block text-dark-slate font-semibold mb-2">
                                    <Calendar className="inline-block w-5 h-5 ml-2 text-soft-green" />
                                    التاريخ
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                                />
                            </div>

                            {/* Time Selection */}
                            <div>
                                <label className="block text-dark-slate font-semibold mb-2">
                                    <Clock className="inline-block w-5 h-5 ml-2 text-soft-green" />
                                    الوقت
                                </label>
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                                >
                                    <option value="">اختر الوقت</option>
                                    {timeSlots.map((slot) => (
                                        <option key={slot} value={slot}>
                                            {slot}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Notes Field */}
                            <div>
                                <label className="block text-dark-slate font-semibold mb-2">
                                    ملاحظات إضافية (اختياري)
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors resize-none"
                                    rows={4}
                                    placeholder="أي ملاحظات أو احتياجات خاصة..."
                                />
                            </div>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            type="submit"
                            className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
                        >
                            <CreditCard className="w-5 h-5" />
                            الدفع عبر Geidea
                        </motion.button>

                        {/* Alternative Contact */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                            className="p-4 bg-white rounded-lg text-center"
                        >
                            <p className="text-dark-slate/70 mb-3">
                                أو يمكنك التواصل معنا مباشرة
                            </p>
                            <a
                                href="tel:+966500000000"
                                className="inline-block text-soft-green font-bold hover:underline"
                            >
                                📞 +966 50 000 0000
                            </a>
                            <span className="mx-3 text-dark-slate/30">|</span>
                            <a
                                href="https://wa.me/966500000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-soft-green font-bold hover:underline"
                            >
                                💬 واتس آب
                            </a>
                        </motion.div>
                    </motion.form>
                </div>
            </section>
        </MainLayout>
    );
}
