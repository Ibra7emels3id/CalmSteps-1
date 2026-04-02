import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";

/**
 * Booking Page
 * Design Philosophy: Simple, clear booking form
 * - Service selection
 * - Date and time picker
 * - Customer information
 */

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 1, name: "مساج استرخاء", price: "150 ر.س" },
    { id: 2, name: "مساج رياضي", price: "180 ر.س" },
    { id: 3, name: "مساج علاجي", price: "200 ر.س" },
    { id: 4, name: "مساج الرأس والرقبة", price: "100 ر.س" },
    { id: 5, name: "مساج القدمين", price: "120 ر.س" },
    { id: 6, name: "مساج الظهر", price: "160 ر.س" },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        notes: "",
      });
    }, 3000);
  };

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
              اختر الخدمة والموعد المناسب لك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-beige rounded-lg p-8 shadow-soft"
          >
            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-soft-green text-white rounded-lg text-center"
              >
                <p className="font-semibold">تم استقبال طلب الحجز بنجاح!</p>
                <p className="text-sm mt-1">سيتم التواصل معك قريباً للتأكيد</p>
              </motion.div>
            )}

            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
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
            </motion.div>

            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6"
            >
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
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <label className="block text-dark-slate font-semibold mb-2">
                <Mail className="inline-block w-5 h-5 ml-2 text-soft-green" />
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                placeholder="example@email.com"
              />
            </motion.div>

            {/* Service Selection */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-6"
            >
              <label className="block text-dark-slate font-semibold mb-2">
                الخدمة المطلوبة
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
              >
                <option value="">اختر الخدمة</option>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name} - {service.price}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Date Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
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
            </motion.div>

            {/* Time Selection */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-6"
            >
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
            </motion.div>

            {/* Notes Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
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
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              تأكيد الحجز
            </motion.button>

            {/* Alternative Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-white rounded-lg text-center"
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
