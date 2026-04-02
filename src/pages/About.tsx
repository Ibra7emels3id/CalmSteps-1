import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import { Award, Users, Heart, Zap } from "lucide-react";

/**
 * About Page
 * Design Philosophy: Build trust and credibility
 * - Company mission and values
 * - Team expertise
 * - Why choose us
 */

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "الرعاية",
      description: "نهتم براحتك وسلامتك بشكل كامل",
    },
    {
      icon: Award,
      title: "الاحترافية",
      description: "فريق مدرب وذو خبرة عالية",
    },
    {
      icon: Zap,
      title: "الجودة",
      description: "أفضل معايير الخدمة والنظافة",
    },
    {
      icon: Users,
      title: "الثقة",
      description: "موثوق من آلاف العملاء الراضين",
    },
  ];

  const team = [
    {
      name: "أحمد الدعيع",
      role: "مدير عام",
      experience: "15 سنة",
    },
    {
      name: "محمد الشهري",
      role: "معالج مساج أول",
      experience: "12 سنة",
    },
    {
      name: "سالم الغامدي",
      role: "معالج مساج متخصص",
      experience: "10 سنوات",
    },
    {
      name: "علي الزهراني",
      role: "معالج مساج",
      experience: "8 سنوات",
    },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.about.title}</title>
        <meta name="description" content={seoConfig.about.description} />
        <meta name="keywords" content={seoConfig.about.keywords} />
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
              من نحن
            </h1>
            <p className="text-xl text-dark-slate/70 leading-relaxed">
              خطوات الهدوء هي وجهتك الأولى للاسترخاء والعافية في الرياض
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-dark-slate mb-8 text-center">
              رسالتنا
            </h2>
            <p className="text-lg text-dark-slate/70 leading-relaxed mb-6">
              في خطوات الهدوء، نؤمن أن الاسترخاء والعافية حق أساسي لكل شخص. نسعى
              لتوفير خدمات مساج احترافية عالية الجودة تجمع بين التقنيات التقليدية
              والحديثة لتحقيق أقصى استفادة صحية.
            </p>
            <p className="text-lg text-dark-slate/70 leading-relaxed">
              فريقنا المتخصص مكرس لتقديم تجربة فريدة وآمنة في بيئة هادئة وراقية،
              حيث يمكنك الاسترخاء الكامل والتخلص من الضغوط اليومية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-beige">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-16 text-center"
          >
            قيمنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 text-center shadow-soft"
                >
                  <Icon className="w-12 h-12 text-soft-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark-slate mb-3">
                    {value.title}
                  </h3>
                  <p className="text-dark-slate/60">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-slate mb-4">
              فريقنا المتخصص
            </h2>
            <p className="text-lg text-dark-slate/70">
              معالجون مدربون وذو خبرة عالية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-beige rounded-lg p-8 text-center shadow-soft"
              >
                <div className="w-20 h-20 bg-soft-green rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663508342394/VHd8t6UyWwuT7hRmAew2oY/massage-relaxation-KWA7U4VWXSnSe7yn2bDehx.webp"
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark-slate mb-2">
                  {member.name}
                </h3>
                <p className="text-soft-green font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-dark-slate/60 text-sm">
                  {member.experience} خبرة
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-beige">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-dark-slate mb-12 text-center"
          >
            لماذا تختارنا؟
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                title: "معايير صحية عالية",
                description:
                  "نتبع أعلى معايير النظافة والتعقيم في جميع خدماتنا",
              },
              {
                title: "فريق متخصص",
                description:
                  "معالجون مدربون على أعلى مستويات التدريب الدولية",
              },
              {
                title: "بيئة هادئة وآمنة",
                description: "مكان مريح وآمن للاسترخاء الكامل",
              },
              {
                title: "أسعار منافسة",
                description:
                  "نقدم أفضل قيمة مقابل الخدمات عالية الجودة",
              },
              {
                title: "حجز سهل",
                description:
                  "احجز جلستك بسهولة عبر الهاتف أو الموقع الإلكتروني",
              },
              {
                title: "رضا العملاء",
                description:
                  "أكثر من 1000 عميل راضي عن خدماتنا",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-soft"
              >
                <h3 className="text-xl font-bold text-dark-slate mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-slate/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
