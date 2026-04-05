import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import { Check } from "lucide-react";


export default function Pricing() {
  const packages = [
    {
      id: 1,
      name: "الجلسة الواحدة",
      description: "جلسة واحدة من خدمات المساج",
      price: "من 120 ر.س",
      features: [
        "مساج احترافي",
        "مدة 30-60 دقيقة",
        "بيئة هادئة",
        "معالج مدرب",
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: "باقة الشهر",
      description: "4 جلسات في الشهر",
      price: "550 ر.س",
      features: [
        "4 جلسات شهرية",
        "توفير 100 ر.س",
        "أولوية في الحجز",
        "معالج مخصص",
        "استشارة مجانية",
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: "باقة الربع سنة",
      description: "12 جلسة في 3 أشهر",
      price: "1500 ر.س",
      features: [
        "12 جلسة",
        "توفير 300 ر.س",
        "أولوية عالية في الحجز",
        "معالج مخصص",
        "استشارات مجانية",
        "عروض خاصة إضافية",
      ],
      highlighted: false,
    },
  ];

  const servicesPricing = [
    {
      category: "مساج استرخاء",
      prices: [
        { duration: "30 دقيقة", price: "100 ر.س" },
        { duration: "60 دقيقة", price: "150 ر.س" },
        { duration: "90 دقيقة", price: "200 ر.س" },
      ],
    },
    {
      category: "مساج رياضي",
      prices: [
        { duration: "30 دقيقة", price: "120 ر.س" },
        { duration: "60 دقيقة", price: "180 ر.س" },
        { duration: "90 دقيقة", price: "240 ر.س" },
      ],
    },
    {
      category: "مساج علاجي",
      prices: [
        { duration: "30 دقيقة", price: "150 ر.س" },
        { duration: "60 دقيقة", price: "200 ر.س" },
        { duration: "90 دقيقة", price: "280 ر.س" },
      ],
    },
    {
      category: "مساج الرأس والرقبة",
      prices: [
        { duration: "30 دقيقة", price: "100 ر.س" },
        { duration: "45 دقيقة", price: "130 ر.س" },
      ],
    },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.pricing.title}</title>
        <meta name="description" content={seoConfig.pricing.description} />
        <meta name="keywords" content={seoConfig.pricing.keywords} />
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
              الأسعار
            </h1>
            <p className="text-xl text-dark-slate/70 leading-relaxed">
              أسعار منافسة وشفافة لجميع خدماتنا
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12 rounded-lg overflow-hidden shadow-lg h-80"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663508342394/VHd8t6UyWwuT7hRmAew2oY/massage-spa-interior-HeAobXXoD2GhmQpAj2xa5b.webp"
              alt="بيئة السبا
"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            الباقات الشهرية
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden shadow-soft transition-all duration-300 ${
                  pkg.highlighted
                    ? "ring-2 ring-soft-green transform scale-105"
                    : ""
                }`}
              >
                {/* Header */}
                <div
                  className={`p-8 text-center ${
                    pkg.highlighted
                      ? "bg-soft-green text-white"
                      : "bg-beige text-dark-slate"
                  }`}
                >
                  {pkg.highlighted && (
                    <span className="inline-block bg-light-brown text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                      الأكثر شهرة
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className={pkg.highlighted ? "text-white/80" : ""}>
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="p-8 text-center border-b border-soft-gray">
                  <div className="text-4xl font-bold text-soft-green">
                    {pkg.price}
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-soft-green flex-shrink-0" />
                        <span className="text-dark-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                    <a href="https://wa.me/966578656379"
                      className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                        pkg.highlighted
                          ? "bg-soft-green text-white hover:opacity-90"
                          : "bg-beige text-dark-slate border-2 border-soft-green hover:bg-soft-green hover:text-white"
                      }`}
                    >
                      احجز الآن
                    </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20 bg-beige">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            أسعار الخدمات
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesPricing.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-soft"
              >
                <h3 className="text-2xl font-bold text-dark-slate mb-6">
                  {service.category}
                </h3>
                <div className="space-y-4">
                  {service.prices.map((price, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between pb-4 border-b border-soft-gray last:border-b-0"
                    >
                      <span className="text-dark-slate/70">
                        {price.duration}
                      </span>
                      <span className="text-xl font-bold text-soft-green">
                        {price.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            عروض خاصة
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: "عرض العملاء الجدد",
                description:
                  "احصل على خصم 20% على أول جلسة لك معنا",
              },
              {
                title: "عرض المجموعات",
                description:
                  "احصل على خصم 15% عند حجز 3 جلسات أو أكثر",
              },
              {
                title: "عرض الموظفين",
                description:
                  "خصم خاص للموظفين والموظفات من الشركات الكبرى",
              },
              {
                title: "عرض نهاية الأسبوع",
                description:
                  "خصم 10% على جميع الخدمات يوم الجمعة والسبت",
              },
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-beige rounded-lg p-6 border-r-4 border-soft-green"
              >
                <h3 className="text-xl font-bold text-dark-slate mb-2">
                  {offer.title}
                </h3>
                <p className="text-dark-slate/70">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-beige">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            أسئلة حول الأسعار
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: "هل يمكن استرجاع المبلغ إذا لم أستطع الحضور؟",
                a: "نعم، يمكنك استرجاع المبلغ إذا ألغيت الحجز قبل 24 ساعة من الموعد المحدد.",
              },
              {
                q: "هل هناك خصومات للعملاء الدائمين؟",
                a: "نعم، نقدم خصومات تصل إلى 20% للعملاء الدائمين.",
              },
              {
                q: "هل يمكن تحويل الباقة إلى شخص آخر؟",
                a: "نعم، يمكنك تحويل الباقة إلى شخص آخر بشرط عدم استخدام أي جلسات منها.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-soft"
              >
                <h3 className="text-lg font-bold text-dark-slate mb-3">
                  {item.q}
                </h3>
                <p className="text-dark-slate/70">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
