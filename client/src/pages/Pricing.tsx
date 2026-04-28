import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import Product from "./components/Product.jsx";


export default function Pricing() {

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
            <h3 className="text-5xl font-bold text-dark-slate mb-6">
              باقات خطوات الهدوء 
            </h3>
            <p className="text-xl text-dark-slate/70 leading-relaxed">
              اختر الباقة المناسبة لك واستمتع بخدمات فاخرة بأسعار منافسة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <Product/>

      {/* Services Pricing */}
      <section className="py-20 bg-beige">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            أسعار الخدمات الفردية
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
