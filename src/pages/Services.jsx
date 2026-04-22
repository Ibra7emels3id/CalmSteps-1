import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import MainLayout from "@/layout/MainLayout";
import { seoConfig } from "@/hooks/useSEO";
import CompServices from "./components/CompServices";
import {
    Clock,
    Users,
    Award,
    Zap,
    Droplet,
    Hand,
    Waves,
    Scissors,
} from "lucide-react";

export default function Services() {

    return (
        <MainLayout>
            <Helmet>
                <title>{seoConfig.services.title}</title>
                <meta name="description" content={seoConfig.services.description} />
                <meta name="keywords" content={seoConfig.services.keywords} />
            </Helmet>

            {/* Hero Section */}
            <section className="pt-20 bg-gradient-to-b from-beige to-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl font-bold text-dark-slate mb-6">
                            خدماتنا الفاخرة
                        </h1>
                        <p className="text-xl text-dark-slate/70 leading-relaxed">
                            نقدم مجموعة متنوعة من خدمات المساج والعناية المتخصصة لتلبية
                            احتياجاتك
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services by Category */}
            <CompServices />

            {/* Why Our Services */}
            <section className="py-20 bg-beige">
                <div className="container max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold text-dark-slate mb-12 text-center">
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
