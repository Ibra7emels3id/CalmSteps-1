import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import MainLayout from "@/layout/MainLayout";

const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = [
    {
      id: 1,
      name: "خطوات الهدواء - العليا",
      nameEn: "Riyadh - Al Nakheel Branch",
      address: "العليا - الرياض ",
      phone: "+966 53 539 9309",
      email: "info@calmstepspa.com",
      googleRating: 4.8,
      googleReviews: 245,
      googleMapsUrl: "https://maps.app.goo.gl/4wh2v2vRTjS9NXbV9?g_st=ic",
      GoogleMapHtml: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3624.523552130298!2d46.67238868500015!3d24.708899984125722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQyJzMyLjAiTiA0NsKwNDAnMTIuNyJF!5e0!3m2!1sar!2ssa!4v1775401234484!5m2!1sar!2ssa`,
      latitude: 25.2048,
      longitude: 55.2708,
      hours: {
        weekdays: "10:00 - 22:00",
        friday: "12:00 - 23:00",
        saturday: "10:00 - 23:00",
      },
      socialMedia: {
        facebook: "https://facebook.com/khotawat",
        instagram: "https://www.instagram.com/calmsteps_al_olaya?igsh=emZqb2hxZGg5cHZu&utm_source=qr",
        twitter: "https://twitter.com/khotawat",
        whatsapp: "+966501234567",
      },
    },
    {
      id: 2,
      name: "خطوات الهدواء - الرمال",
      nameEn: "Riyadh - Al Olaya Branch",
      address: "الرمال - الرياض",
      phone: "+966 50 311 0736",
      email: "info@calmstepspa.com",
      googleRating: 4.9,
      googleReviews: 312,
      googleMapsUrl: "https://maps.app.goo.gl/Tjq7v7wXnHnYhFJG7?g_st=ic",
      GoogleMapHtml: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.85797148555!2d46.816388684996916!3d24.868699984050103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUyJzA3LjMiTiA0NsKwNDgnNTEuMSJF!5e0!3m2!1sar!2ssa!4v1775559809098!5m2!1sar!2ssa`,
      latitude: 24.7641,
      longitude: 46.6753,
      hours: {
        weekdays: "10:00 - 22:00",
        friday: "12:00 - 23:00",
        saturday: "10:00 - 23:00",
      },
      socialMedia: {
        facebook: "https://facebook.com/khotawat",
        instagram: "https://instagram.com/khotawat",
        twitter: "https://twitter.com/khotawat",
        whatsapp: "+966501234568",
      },
    },
    {
      id: 3,
      name: "خطوات الهدواء - الشفاء",
      nameEn: "Jeddah - Corniche Branch",
      address: "الشفاء - الرياض",
      phone: "+966 55 390 8272",
      email: "info@calmstepspa.com",
      googleRating: 4.7,
      googleReviews: 189,
      googleMapsUrl: "https://maps.app.goo.gl/GjRaWT22qvnkHfKq8?g_st=ic",
      GoogleMapHtml: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.326195068007!2d46.7146088!3d24.5433874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f3a6fb7b79b%3A0x58a8eb075d8406d1!2z2YXYsdmD2LIg2K7Yt9mI2KfYqiDYp9mE2YfYr9mI2KEg2YTZhNmF2LPYp9isIC0g2KfZhNi02YHYpw!5e0!3m2!1sar!2ssa!4v1775560189263!5m2!1sar!2ssa`,
      latitude: 21.5433,
      longitude: 39.1728,
      hours: {
        weekdays: "10:00 - 22:00",
        friday: "12:00 - 23:00",
        saturday: "10:00 - 23:00",
      },
      socialMedia: {
        facebook: "https://facebook.com/khotawat",
        instagram: "https://www.instagram.com/calmsteps_al_shifa?igsh=azU2MXJraGd3N213&utm_source=qr",
        twitter: "https://twitter.com/khotawat",
        whatsapp: "+966501234569",
      },
    },
    {
      id: 4,
      name: "خطوات الهدواء - وادي لبن",
      nameEn: "Dammam - Al Khaleej Branch",
      address: "وادي لبن - الرياض",
      phone: "+966 55 732 3909",
      email: "info@calmstepspa.com",
      googleRating: 4.6,
      googleReviews: 156,
      googleMapsUrl: "https://maps.app.goo.gl/gKrGCPUAU5VrZzhd9?g_st=ic",
      GoogleMapHtml: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.277177716209!2d46.5571776!3d24.648585900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa8ded33f99e2c55b%3A0x3751c635e98e07ba!2z2YXYsdmD2LIg2K7Yt9mI2KfYqiDYp9mE2YfYr9mI2KEg2KfZhNix2YrYp9i22Yo!5e0!3m2!1sar!2ssa!4v1775560861318!5m2!1sar!2ssa",
      latitude: 26.4124,
      longitude: 50.1971,
      hours: {
        weekdays: "10:00 - 22:00",
        friday: "12:00 - 23:00",
        saturday: "10:00 - 23:00",
      },
      socialMedia: {
        facebook: "https://facebook.com/khotawat",
        instagram: "https://www.instagram.com/calmsteps_wadi_laban?igsh=MXI3azJvbHVlamdjMw%3D%3D&utm_source=qr",
        twitter: "https://twitter.com/khotawat",
        whatsapp: "+966501234570",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <MainLayout>
      <Helmet>
        <title>فروعنا - خطوات الهدوء | مراكز المساج الرجالي</title>
        <meta
          name="description"
          content="اكتشف فروع خطوات الهدوء في الرياض وجدة والدمام. مراكز مساج احترافية للرجال مع خدمات عالية الجودة."
        />
        <meta
          name="keywords"
          content="فروع المساج، مراكز المساج الرياض، مساج جدة، مساج الدمام"
        />
        <meta property="og:title" content="فروعنا - خطوات الهدوء" />
        <meta
          property="og:description"
          content="اكتشف فروع خطوات الهدوء في جميع أنحاء المملكة"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#7BA878] to-[#F5F5DC] py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            فروعنا
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            اكتشف فروع خطوات الهدوء في جميع أنحاء المملكة
          </p>
        </motion.div>
      </section>

      {/* Branches Grid */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {branches.map((branch) => (
              <motion.div
                key={branch.id}
                variants={itemVariants}
                className="bg-white border border-[#E8E8E8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Branch Header */}
                <div className="bg-gradient-to-r from-[#7BA878] to-[#A8C3A0] p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{branch.name}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(branch.googleRating)
                              ? "fill-yellow-300 text-yellow-300"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{branch.googleRating}</span>
                    <span className="text-sm">
                      ({branch.googleReviews} تقييم)
                    </span>
                  </div>
                </div>

                {/* Branch Content */}
                <div className="p-6">
                  {/* Address */}
                  <div className="flex gap-3 mb-4">
                    <MapPin
                      className="text-[#7BA878] flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6 border-t border-b border-gray-200 py-4">
                    <div className="flex gap-3 items-center">
                      <Phone size={18} className="text-[#7BA878]" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-[#7BA878] hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Mail size={18} className="text-[#7BA878]" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-[#7BA878] hover:underline"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      ساعات العمل
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>الأحد - الخميس: {branch.hours.weekdays}</p>
                      <p>الجمعة: {branch.hours.friday}</p>
                      <p>السبت: {branch.hours.saturday}</p>
                    </div>
                  </div>

                  {/* Map Button */}
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#7BA878] text-white text-center py-2 rounded-lg mb-4 hover:bg-[#6a9668] transition-colors"
                  >
                    عرض على الخريطة
                  </a>

                  {/* Social Media */}
                  <div className="flex gap-3 justify-center">
                    <a
                      href={branch.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F5F5DC] rounded-full hover:bg-[#7BA878] hover:text-white transition-colors"
                      title="فيسبوك"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={branch.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F5F5DC] rounded-full hover:bg-[#7BA878] hover:text-white transition-colors"
                      title="إنستجرام"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={branch.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F5F5DC] rounded-full hover:bg-[#7BA878] hover:text-white transition-colors"
                      title="تويتر"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`https://wa.me/${branch.socialMedia.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#F5F5DC] rounded-full hover:bg-[#7BA878] hover:text-white transition-colors"
                      title="واتساب"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.258-1.02 1.022-1.756 2.119-2.259 3.357-.504 1.238-.759 2.553-.761 4.255v.004c.002 1.702.257 3.017.761 4.255.503 1.238 1.239 2.335 2.259 3.356 1.022 1.02 2.118 1.756 3.357 2.259 1.238.504 2.554.759 4.255.761h.004c1.702-.002 3.017-.257 4.255-.761 1.238-.503 2.335-1.239 3.356-2.259 1.02-1.021 1.756-2.118 2.259-3.357.504-1.238.759-2.553.761-4.255v-.004c-.002-1.702-.257-3.017-.761-4.255-.503-1.238-1.239-2.335-2.259-3.356-1.022-1.02-2.118-1.756-3.357-2.259-1.238-.504-2.554-.759-4.255-.761z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F5F5DC]">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            مواقعنا على الخريطة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={branch.GoogleMapHtml}
                  title={branch.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#7BA878] to-[#A8C3A0] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">هل تريد حجز موعد؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن واحجز جلستك في أقرب فرع لك
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-[#7BA878] px-8 py-3 rounded-lg font-bold hover:bg-[#F5F5DC] transition-colors"
          >
            احجز الآن
          </a>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Branches;
