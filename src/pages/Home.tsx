import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import { ChevronDown, Star, Users, Award, Clock } from "lucide-react";
import image2 from "../../public/img/56a9028b-52b5-484d-8d08-b4ad208eba16-1000x543.webp";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663508342394/VHd8t6UyWwuT7hRmAew2oY/massage-hero-fullscreen-1-3oPxASfuBmb6cJRxYuHa8N.webp",
      title: "خطوات الهدوء",
      subtitle:
        "اكتشف الاسترخاء الحقيقي مع خدمات مساج احترافية للرجال في الرياض",
      cta1: "احجز جلستك الآن",
      cta2: "اعرف المزيد",
    },
    {
      image: image2,
      title: "مساج استرخاء عميق",
      subtitle: "تخلص من التوتر والإجهاد مع جلسات مساج متخصصة وآمنة",
      cta1: "احجز الآن",
      cta2: "اعرف الخدمات",
    },
    {
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663508342394/VHd8t6UyWwuT7hRmAew2oY/massage-hero-fullscreen-3-QxGuo3dRvcKjkMGrTG7vpV.webp",
      title: "جودة عالية وخبرة",
      subtitle: "معالجون محترفون بخبرة 10+ سنوات في مجال المساج العلاجي",
      cta1: "احجز الآن",
      cta2: "تعرف على الفريق",
    },
  ];

  const services = [
    {
      id: 1,
      title: "مساج استرخاء",
      description: "مساج كلاسيكي يخفف التوتر والإجهاد",
      icon: "🧘",
      price: "150 ر.س",
    },
    {
      id: 2,
      title: "مساج رياضي",
      description: "مساج متخصص لتحسين الأداء الرياضي",
      icon: "💪",
      price: "180 ر.س",
    },
    {
      id: 3,
      title: "مساج علاجي",
      description: "مساج طبي لتخفيف الآلام والإصابات",
      icon: "🏥",
      price: "200 ر.س",
    },
    {
      id: 4,
      title: "مساج الرأس والرقبة",
      description: "تخفيف التوتر من الرأس والرقبة والأكتاف",
      icon: "🎯",
      price: "100 ر.س",
    },
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      text: "خدمة رائعة وموظفون محترفون جداً. شعرت بالراحة الكاملة.",
      rating: 5,
    },
    {
      id: 2,
      name: "سالم الدوسري",
      text: "أفضل مساج في الرياض. الأسعار منافسة والجودة عالية جداً.",
      rating: 5,
    },
    {
      id: 3,
      name: "محمود علي",
      text: "بيئة هادئة وآمنة. سأعود بالتأكيد.",
      rating: 5,
    },
  ];

  const faqItems = [
    {
      id: 1,
      question: "هل الخدمة آمنة وموثوقة؟",
      answer:
        "نعم، جميع خدماتنا توفر أعلى معايير الأمان والنظافة. نستخدم معدات معقمة وموظفين مدربين.",
    },
    {
      id: 2,
      question: "كم مدة الجلسة الواحدة؟",
      answer: "تتراوح مدة الجلسة بين 30 إلى 90 دقيقة حسب نوع المساج المختار.",
    },
    {
      id: 3,
      question: "هل يمكن الحجز عبر الهاتف؟",
      answer:
        "نعم، يمكنك الحجز عبر الهاتف أو واتس آب أو من خلال موقعنا الإلكتروني.",
    },
    {
      id: 4,
      question: "هل هناك عروض خاصة أو خصومات؟",
      answer: "نعم، نقدم عروضاً خاصة للعملاء الدائمين وحزم الجلسات المتعددة.",
    },
  ];

  const stats = [
    { icon: Users, label: "عميل راضي", value: "1000+" },
    { icon: Award, label: "جودة مضمونة", value: "100%" },
    { icon: Clock, label: "سنوات خبرة", value: "10+" },
  ];

  return (
    <MainLayout>
      <Helmet>
        <title>{seoConfig.home.title}</title>
        <meta name="description" content={seoConfig.home.description} />
        <meta name="keywords" content={seoConfig.home.keywords} />
        <meta property="og:title" content={seoConfig.home.title} />
        <meta property="og:description" content={seoConfig.home.description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Arabic" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="خطوات الهدوء" />
      </Helmet>
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0 w-full h-full">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={`خدمات المساج الاحترافية - صورة ${index + 1}`}
                className="w-full h-full "
                loading="lazy"
              />
            </motion.div>
          ))}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-soft-green w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`صورة ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <span className="btn-primary inline-block cursor-pointer px-8 py-3 text-lg">
                    احجز جلستك الآن
                  </span>
                </Link>
                <Link href="/services">
                  <span className="inline-block cursor-pointer px-8 py-3 text-lg bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/30 transition-all">
                    اعرف المزيد
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-soft-gray">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-soft-green mx-auto mb-3" />
                  <p className="text-2xl font-bold text-dark-slate">
                    {stat.value}
                  </p>
                  <p className="text-dark-slate/60">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-beige">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-slate mb-4">خدماتنا</h2>
            <p className="text-lg text-dark-slate/70">
              نقدم مجموعة متنوعة من خدمات المساج المتخصصة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark-slate mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-slate/60 text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-soft-green font-bold text-lg">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <a className="btn-primary inline-block">عرض جميع الخدمات</a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-slate mb-4">
              آراء عملائنا
            </h2>
            <p className="text-lg text-dark-slate/70">
              اسمع من عملائنا الراضين عن تجربتهم
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-beige rounded-lg p-8 shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-soft-green text-soft-green"
                    />
                  ))}
                </div>
                <p className="text-dark-slate/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-dark-slate">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-beige">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-slate mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-dark-slate/70">
              إجابات على الأسئلة التي قد تكون لديك
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-soft"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === item.id ? null : item.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-beige/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-dark-slate text-right">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-soft-green transition-transform ${
                      expandedFaq === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-soft-gray bg-beige/30"
                  >
                    <p className="text-dark-slate/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loction  */}

      <section className="py-20 bg-gradient-to-b from-dark-slate to-dark-slate">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              فروعنا
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              مراكزنا متواجدة في جميع مناطق الرياض .. حد وجريتك
            </p>
          </motion.div>

          {/* Branches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "الرمال",
                icon: "🏢",
                color: "from-blue-500 to-blue-600",
                number: "966500000001",
              },
              {
                name: "وادي لين",
                icon: "🌳",
                color: "from-green-500 to-green-600",
                number: "966500000002",
              },
              {
                name: "الشفا",
                icon: "🏙️",
                color: "from-purple-500 to-purple-600",
                number: "966500000003",
              },
              {
                name: "العليا",
                icon: "✨",
                color: "from-yellow-500 to-yellow-600",
                number: "966500000004",
              },
              {
                name: "المرسلات",
                icon: "🎯",
                color: "from-red-500 to-red-600",
                number: "966500000005",
              },
            ].map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                  {/* Card Header with Gradient */}
                  <div
                    className={`bg-gradient-to-r ${branch.color} p-6 text-center`}
                  >
                    <span className="text-5xl block">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 mx-auto"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                            fill="#ffffff"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      {branch.name}
                    </h3>
                    <p className="text-gray-400 text-sm text-center mb-6">
                      فرع متخصص بخدمات مساج احترافية
                    </p>

                    {/* Button */}
                    <a href={`tel:${branch.number}`} className="group-hover:flex items-center justify-center">
                      <span className="block w-full py-3 bg-soft-green text-dark-slate font-semibold rounded-lg text-center transition-all duration-300 cursor-pointer hover:opacity-90 group-hover:shadow-lg">
                        تواصل معنا
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-slate text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">هل أنت مستعد للاسترخاء؟</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              احجز جلستك الآن واستمتع بتجربة مساج احترافية لا تُنسى
            </p>
            <Link href="/booking">
              <a
                className="inline-block px-8 py-4 bg-soft-green text-white font-semibold rounded-lg transition-all duration-300"
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                احجز الآن
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>

    //
  );
}
