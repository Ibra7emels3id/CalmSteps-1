import React from "react";
import { Check, Crown, Zap, Wind, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const Product = () => {
    const packages = [
        {
            id: 1,
            name: "باقة الرويال",
            image: "https://media.gemini.media/img/large/2017/12/15/2017_12_15_0_37_21_71.jpg",
            description: "الباقة الفاخرة الشاملة 5 خدمات مميزة",
            originalPrice: "1045 ر.س",
            price: "899 ر.س",
            icon: Crown,
            features: [
                { text: "مساج كالم فيوجن", duration: "1:30" },
                "حمام مغربي ملكي بزيت الأرجان",
                "البديكير مع فوت سبا",
                "اكوا جاكوزي",
                { text: "خدمات الحلاقة", isFree: true },
            ],
            highlighted: true,
            gradient: "from-purple-400 to-pink-500",
        },
        {
            id: 2,
            name: "باقة كالم",
            image: "https://media.gemini.media/img/large/2017/12/15/2017_12_15_0_37_21_71.jpg",
            description: "الباقة المتوازنة",
            originalPrice: "850 ر.س",
            price: "699 ر.س",
            icon: Zap,
            features: [
                { text: "مساج كالم فيوجن", duration: "1:00" },
                "حمام مغربي بالأعشاب المعطرة",
                "بديكير العناية باليدين",
                { text: "خدمات الحلاقة وتنظيف فروة الرأس", isFree: false },
            ],
            highlighted: false,
            gradient: "from-blue-400 to-cyan-500",
        },
        {
            id: 3,
            name: "باقة اليڤيت",
            image: "https://media.gemini.media/img/large/2017/12/15/2017_12_15_0_37_21_71.jpg",
            description: "الباقة الأساسية المميزة",
            originalPrice: "670 ر.س",
            price: "499 ر.س",
            icon: Wind,
            features: [
                { text: "مساج سويدي", duration: "1:00" },
                "الحمام المغربي الطبيعي",
                "بديكير العناية بالقدمين",
                { text: "خدمات الحلاقة", isFree: false },
            ],
            highlighted: false,
            gradient: "from-green-400 to-emerald-500",
        },
        {
            id: 4,
            name: "باقة سينس",
            image: "https://media.gemini.media/img/large/2017/12/15/2017_12_15_0_37_21_71.jpg",
            description: "الباقة الاقتصادية",
            originalPrice: "375 ر.س",
            price: "299 ر.س",
            icon: Sparkles,
            features: [
                { text: "مساج سويدي", duration: "0:40" },
                "الحمام المغربي الطبيعي",
            ],
            highlighted: false,
            gradient: "from-orange-400 to-red-500",
        },
    ];

    return (
        <section className="pb-20 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => {
                        const IconComponent = pkg.icon;
                        return (
                            <motion.div
                                key={pkg.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col"
                            >
                                {/* Gradient Header */}
                                <div className="relative h-[250px] overflow-hidden ">

                                    <img
                                        src={pkg.image}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Shadow قوي */}
                                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    {/* Content */}
                                    <div className="absolute bottom-0 right-0 z-10 p-4 text-white">
                                        <div className="flex items-center gap-2 mb-1">
                                            <IconComponent className="w-6 h-6" />
                                            <h3 className="text-3xl font-bold">{pkg.name}</h3>
                                        </div>
                                        <p className="text-sm text-white/90">{pkg.description}</p>
                                    </div>

                                </div>

                                {/* Price Section */}
                                <div className="p-6 bg-white flex flex-col flex-grow">
                                    <div className="flex items-baseline justify-center gap-2 mb-6 mt-auto">
                                        <span className="text-3xl font-bold text-soft-green">
                                            {pkg.price}
                                        </span>
                                        <span className="text-sm text-dark-slate/50 line-through">
                                            {pkg.originalPrice}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {pkg.features.map((feature, i) => {
                                            const isString = typeof feature === "string";
                                            const featureText = isString ? feature : feature.text;
                                            const isFree = !isString && feature.isFree;
                                            const duration = !isString && feature.duration;
                                            return (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-soft-green flex-shrink-0 mt-0.5" />
                                                    <div className="flex items-center justify-between w-full">
                                                        <span className="text-dark-slate/80">{featureText}</span>
                                                        {duration && (
                                                            <span className="ml-2 inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">
                                                                <Clock className="w-3 h-3" />
                                                                {duration}
                                                            </span>
                                                        )}
                                                        {isFree && (
                                                            <span className="ml-2 inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">
                                                                مجاني
                                                            </span>
                                                        )}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <Link href="/booking">
                                        <a
                                            className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${pkg.highlighted
                                                ? `bg-gradient-to-r ${pkg.gradient} text-white hover:opacity-90`
                                                : "bg-beige text-dark-slate border-2 border-soft-green hover:bg-soft-green hover:text-white"
                                                }`}
                                        >
                                            احجز الآن
                                        </a>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Product;