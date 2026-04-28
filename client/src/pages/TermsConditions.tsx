import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";

/**
 * Terms & Conditions Page
 * Google Ads Compliance: Clear terms required
 */

export default function TermsConditions() {
  const sections = [
    {
      title: "قبول الشروط",
      content:
        "باستخدام موقع خطوات الهدوء، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.",
    },
    {
      title: "الخدمات المقدمة",
      content:
        "تقدم خطوات الهدوء خدمات مساج احترافية للرجال. جميع الخدمات يتم تقديمها من قبل معالجين مدربين ومؤهلين.",
    },
    {
      title: "الحجوزات والدفع",
      content:
        "يجب إجراء الحجوزات عبر الموقع أو الهاتف. يتم قبول الدفع نقداً عند الوصول أو عبر التحويل البنكي. جميع الأسعار شاملة الضريبة.",
    },
    {
      title: "إلغاء الحجز",
      content:
        "يمكن إلغاء الحجز قبل 24 ساعة من الموعد المحدد دون أي رسوم. الإلغاء بعد 24 ساعة قد يترتب عليه رسوم إلغاء.",
    },
    {
      title: "المسؤولية",
      content:
        "خطوات الهدوء غير مسؤولة عن أي إصابات أو أضرار قد تحدث أثناء الخدمة إلا في حالة الإهمال من جانبنا.",
    },
    {
      title: "السلوك المتوقع",
      content:
        "يتوقع من المستخدمين التصرف بشكل احترافي واحترام موظفينا. أي سلوك غير لائق قد يؤدي إلى رفض الخدمة.",
    },
    {
      title: "الملكية الفكرية",
      content:
        "جميع المحتويات على الموقع، بما في ذلك النصوص والصور والشعارات، محمية بحقوق الملكية الفكرية.",
    },
    {
      title: "تعديل الشروط",
      content:
        "قد نقوم بتعديل هذه الشروط والأحكام في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني.",
    },
    {
      title: "القانون الحاكم",
      content:
        "تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية، وتحت اختصاص محاكمها.",
    },
    {
      title: "التواصل",
      content:
        "لأي استفسارات حول هذه الشروط، يرجى التواصل معنا على info@khotawat.com أو +966 50 000 0000.",
    },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.terms.title}</title>
        <meta name="description" content={seoConfig.terms.description} />
        <meta name="keywords" content={seoConfig.terms.keywords} />
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
              شروط الاستخدام
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
                className="border-r-4 border-light-brown pr-6"
              >
                <h2 className="text-2xl font-bold text-dark-slate mb-4">
                  {index + 1}. {section.title}
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
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-beige rounded-lg"
          >
            <p className="text-dark-slate/70 text-sm">
              بقبولك لهذه الشروط والأحكام، فإنك توافق على الالتزام بجميع البنود
              المذكورة أعلاه. نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون
              إشعار مسبق.
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
