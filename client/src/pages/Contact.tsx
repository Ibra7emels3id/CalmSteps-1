import { motion } from "framer-motion";
import MainLayout from "@/layout/MainLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/**
 * Contact Page
 * Design Philosophy: Easy contact information and form
 */

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 50 000 0000",
      link: "tel:+966500000000",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@khotawat.com",
      link: "mailto:info@khotawat.com",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الرياض، المملكة العربية السعودية",
      link: "#",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "09:00 - 21:00 يومياً",
      link: "#",
    },
  ];

  return (
    <MainLayout>
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
              اتصل بنا
            </h1>
            <p className="text-xl text-dark-slate/70 leading-relaxed">
              نحن هنا للإجابة على جميع استفساراتك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-beige rounded-lg p-8 text-center shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-12 h-12 text-soft-green mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-dark-slate mb-2">
                    {info.title}
                  </h3>
                  <p className="text-dark-slate/70 break-words">
                    {info.value}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-beige">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-slate mb-4">
              أرسل لنا رسالة
            </h2>
            <p className="text-lg text-dark-slate/70">
              سنرد عليك في أسرع وقت ممكن
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-soft space-y-6"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-dark-slate font-semibold mb-2">
                الاسم
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                placeholder="أدخل اسمك"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <label className="block text-dark-slate font-semibold mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                placeholder="example@email.com"
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-dark-slate font-semibold mb-2">
                رقم الهاتف
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                placeholder="05xxxxxxxx"
              />
            </motion.div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <label className="block text-dark-slate font-semibold mb-2">
                الموضوع
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors"
                placeholder="موضوع الرسالة"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-dark-slate font-semibold mb-2">
                الرسالة
              </label>
              <textarea
                required
                className="w-full px-4 py-3 border-2 border-soft-gray rounded-lg focus:outline-none focus:border-soft-green transition-colors resize-none"
                rows={6}
                placeholder="اكتب رسالتك هنا..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              type="submit"
              className="w-full btn-primary text-lg py-4"
            >
              إرسال الرسالة
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            موقعنا
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-soft h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.8347436484!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
