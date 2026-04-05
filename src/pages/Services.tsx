import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import {
  Clock,
  Users,
  Award,
  Zap,
  Dumbbell,
  Heart,
  Headphones,
  Footprints,
  Waves,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "مساج الفاخر",
      price: "180 ر.س",
      duration: "60 دقيقة",
      icon: Zap,
      description:
        "مساج كلاسيكي يساعد على تخفيف التوتر والإجهاد والاسترخاء العميق",
      benefits: [
        "تخفيف التوتر والإجهاد",
        "تحسين الدورة الدموية",
        "تحسين جودة النوم",
        "تقليل الآلام العضلية",
      ],
    },
    {
      id: 2,
      title: "الحمام المغربي والمساج",
      price: "245 ر.س",
      duration: "60 دقيقة",
      icon: Dumbbell,
      description:
        "تجربة حمام مغربي تقليدي مع مساج استرخائي لتجديد الجسم والعقل",
      benefits: [
        "تطقوس الحمام المغربي",
        "تنقيت المسام وتجديد خلاصة الجلد",
        "مساج استرخائي لتخفيف التوتر",
        "زيادة المرونة والحركة",
      ],
    },
    {
      id: 3,
      title: "العناية الكاملة والمساج الطبي",
      price: "399 ر.س",
      duration: "60 دقيقة",
      icon: Heart,
      description:
        "مساج طبي متخصص يركز على تخفيف الألم وتحسين الصحة العامة والعافية",
      benefits: [
        "حمام مغربي ملكي فاخر",
        "العناية بالوجة والجسم",
        "العناية بالقدمين ",
        "العناية باليدين",
      ],
    },
    {
      id: 4,
      title: "باقة Vip ",
      price: "400 ر.س",
      duration: "60 دقيقة",
      icon: Headphones,
      description: "تجربة متكاملة من الاسترخاء والعناية الشخصية في جلسة واحدة",
      benefits: [
        "تجربة متكاملة من الاسترخاء والعناية الشخصية",
        "تخفيف التوتر والإجهاد",
        "تحسين الدورة الدموية",
        "تحسين جودة النوم",
        "تقليل الآلام العضلية",
      ],
    },
    {
      id: 5,
      title: "الاسترخاص الملكي",
      price: "250 ر.س",
      duration: "90 دقيقة",
      icon: Footprints,
      description: "مساج انعكاسي للقدمين يحسن الصحة العامة والاسترخاء",
      benefits: [
        "تحسين الدورة الدموية",
        "تخفيف آلام القدمين",
        "تحسين الصحة العامة",
        "استرخاء عميق",
        "تقليل الآلام العضلية",
      ],
    },
    {
      id: 6,
      title: "مساج استرخاء شاملة (VIP)",
      price: "350 ر.س",
      duration: "60 دقيقة",
      icon: Waves,
      description: "مساج شامل يركز على الاسترخاء العميق وتحسين الصحة العامة ",
      benefits: [
        "حمام مغربي ملكي",
        "مساج استرخاء شامل",
        "سنفرة الجسم والتدليك",
        "تنظيف البشرة وتجديدها",
        "تحسين الصحة العامة",
      ],
    },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.services.title}</title>
        <meta name="description" content={seoConfig.services.description} />
        <meta name="keywords" content={seoConfig.services.keywords} />
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
            <h1 className="text-5xl font-bold text-dark-slate mb-6">خدماتنا</h1>
            <p className="text-xl text-dark-slate/70 leading-relaxed">
              نقدم مجموعة متنوعة من خدمات المساج المتخصصة لتلبية احتياجاتك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-beige rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300"
              >
                {/* Service Image */}
                {/* Service Header */}
                <div className="bg-soft-green p-6 text-center">
                  <service.icon className="w-16 h-16 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                {/* Service Content */}
                <div className="p-6">
                  <p className="text-dark-slate/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Service Info */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-soft-gray">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-soft-green" />
                      <span className="text-dark-slate font-semibold">
                        {service.duration}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-soft-green">
                      {service.price}
                    </div>
                  </div>
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-bold text-dark-slate mb-3">الفوائد:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-soft-green font-bold mt-1">
                            •
                          </span>
                          <span className="text-dark-slate/70 text-sm">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* CTA Button */}
                  <a
                    href="https://wa.me/966578656379"
                    className="w-full btn-primary text-center text-sm"
                  >
                    احجز الآن
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-20 bg-beige">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            لماذا خدماتنا متميزة؟
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                icon: Award,
                title: "معالجون مدربون",
                description:
                  "فريقنا مدرب على أعلى المستويات الدولية مع سنوات من الخبرة",
              },
              {
                icon: Users,
                title: "رعاية شخصية",
                description: "نقدم رعاية مخصصة لكل عميل حسب احتياجاته الفردية",
              },
              {
                icon: Clock,
                title: "مرونة الأوقات",
                description: "نعمل بأوقات مرنة لتناسب جدولك اليومي",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-soft"
                >
                  <Icon className="w-8 h-8 text-soft-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-slate mb-2">
                      {item.title}
                    </h3>
                    <p className="text-dark-slate/70">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
