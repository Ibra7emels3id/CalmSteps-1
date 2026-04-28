import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";

/**
 * Privacy Policy Page
 * Google Ads Compliance: Clear privacy policy required
 */

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "مقدمة",
      content:
        "تحترم خطوات الهدوء خصوصيتك وتلتزم بحماية بيانات المستخدمين. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية.",
    },
    {
      title: "المعلومات التي نجمعها",
      content:
        "نجمع المعلومات التالية: الاسم الكامل، رقم الهاتف، البريد الإلكتروني، تاريخ الحجز، نوع الخدمة المطلوبة، والملاحظات الإضافية.",
    },
    {
      title: "كيفية استخدام المعلومات",
      content:
        "نستخدم معلوماتك لمعالجة الحجوزات، التواصل معك بشأن الخدمات، تحسين تجربة المستخدم، والامتثال للقوانين المعمول بها.",
    },
    {
      title: "حماية البيانات",
      content:
        "نتخذ تدابير أمنية مناسبة لحماية بيانات المستخدمين من الوصول غير المصرح به أو التعديل أو الحذف.",
    },
    {
      title: "مشاركة البيانات",
      content:
        "لا نشارك بيانات المستخدمين مع أطراف ثالثة دون الحصول على موافقتك المسبقة، إلا إذا كان ذلك مطلوباً بموجب القانون.",
    },
    {
      title: "حقوقك",
      content:
        "لديك الحق في الوصول إلى بيانات المستخدم الخاصة بك، تصحيحها، حذفها، أو الاعتراض على معالجتها. يمكنك التواصل معنا للتمتع بهذه الحقوق.",
    },
    {
      title: "تغييرات السياسة",
      content:
        "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.",
    },
    {
      title: "التواصل",
      content:
        "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا على info@khotawat.com أو +966 50 000 0000.",
    },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.privacy.title}</title>
        <meta name="description" content={seoConfig.privacy.description} />
        <meta name="keywords" content={seoConfig.privacy.keywords} />
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
              سياسة الخصوصية
            </h1>
            <p className="text-lg text-dark-slate/70">
              آخر تحديث: أبريل 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-r-4 border-soft-green pr-6"
              >
                <h2 className="text-2xl font-bold text-dark-slate mb-4">
                  {section.title}
                </h2>
                <p className="text-dark-slate/70 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-beige rounded-lg"
          >
            <p className="text-dark-slate/70 text-sm">
              بموجب امتثالنا لسياسة الخصوصية هذه، نضمن حماية بيانات المستخدمين
              وفقاً للمعايير الدولية وقوانين حماية البيانات المعمول بها.
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
