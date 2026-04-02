/**
 * SEO Hook for managing page metadata
 * Provides consistent SEO configuration across pages
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export function useSEO(config: SEOConfig) {
  return {
    title: `${config.title} | خطوات الهدوء`,
    description: config.description,
    keywords: config.keywords || "مساج، مساج رجالي، الرياض",
    ogTitle: config.ogTitle || config.title,
    ogDescription: config.ogDescription || config.description,
    ogImage: config.ogImage || "https://example.com/og-image.png",
    canonical: config.canonical || "https://khotawat-alhadaa.com",
  };
}

export const seoConfig = {
  home: {
    title: "خطوات الهدوء - مساج رجالي احترافي في الرياض",
    description:
      "خدمات مساج احترافية للرجال في الرياض. مساج استرخاء، رياضي، وعلاجي بأسعار منافسة.",
    keywords:
      "مساج، مساج رجالي، مساج الرياض، خدمات صحية، استرخاء، مساج علاجي",
  },
  about: {
    title: "من نحن - خطوات الهدوء",
    description:
      "تعرف على خطوات الهدوء، متخصصون في خدمات المساج الاحترافية للرجال.",
    keywords: "عن خطوات الهدوء، فريقنا، خبرتنا، قيمنا",
  },
  services: {
    title: "الخدمات - خطوات الهدوء",
    description:
      "اكتشف جميع خدمات المساج المتخصصة التي نقدمها: استرخاء، رياضي، علاجي وأكثر.",
    keywords: "خدمات مساج، أنواع المساج، مساج متخصص",
  },
  pricing: {
    title: "الأسعار - خطوات الهدوء",
    description:
      "أسعار شفافة ومنافسة لجميع خدمات المساج. باقات شهرية وعروض خاصة.",
    keywords: "أسعار المساج، باقات، عروض خاصة",
  },
  booking: {
    title: "احجز جلستك - خطوات الهدوء",
    description: "احجز جلسة مساج الآن بسهولة من خلال نموذج الحجز الخاص بنا.",
    keywords: "حجز مساج، احجز الآن، تحديد الموعد",
  },
  contact: {
    title: "اتصل بنا - خطوات الهدوء",
    description:
      "تواصل معنا للاستفسار عن خدماتنا. رقم الهاتف، البريد الإلكتروني، والعنوان.",
    keywords: "اتصل بنا، معلومات التواصل، الموقع",
  },
  privacy: {
    title: "سياسة الخصوصية - خطوات الهدوء",
    description: "سياسة الخصوصية الخاصة بنا توضح كيفية حماية بيانات المستخدمين.",
    keywords: "سياسة الخصوصية، حماية البيانات",
  },
  terms: {
    title: "شروط الاستخدام - خطوات الهدوء",
    description: "شروط وأحكام استخدام موقع خطوات الهدوء.",
    keywords: "شروط الاستخدام، الأحكام والشروط",
  },
};
