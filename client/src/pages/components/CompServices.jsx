import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import {
    Clock,
    Users,
    Award,
    Zap,
    Droplet,
    Hand,
    Waves,
    Scissors,
    Eye,
} from "lucide-react";
import { useServices } from '../../store/useServices';
import { Link } from 'wouter';

const CompServices = () => {
    const { FetchServices, services, ServiceLoading } = useServices();
    // Data Service Categories
    const serviceCategories = [
        {
            category: "المساج",
            icon: Zap,
            services: [
                {
                    id: 1,
                    title: "كالم فيوجن 1:30",
                    price: "345 ر.س",
                    duration: "1:30",
                },
                {
                    id: 2,
                    title: "كالم فيوجن 1:00",
                    price: "300 ر.س",
                    duration: "1:00",
                },
                {
                    id: 3,
                    title: "مساج تايلندي",
                    price: "250 ر.س",
                    duration: "-",
                },
                {
                    id: 4,
                    title: "مساج سويدي",
                    price: "220 ر.س",
                    duration: "-",
                },
                {
                    id: 5,
                    title: "مساج سياتشو",
                    price: "220 ر.س",
                    duration: "-",
                },
                {
                    id: 6,
                    title: "مساج رفليكسولوجي",
                    price: "200 ر.س",
                    duration: "-",
                },
            ],
        },
        {
            category: "الحمام المغربي",
            icon: Droplet,
            services: [
                {
                    id: 7,
                    title: "الحمام الملكي بزيت الأرجان",
                    price: "350 ر.س",
                    duration: "-",
                },
                {
                    id: 8,
                    title: "الحمام المغربي بالأعشاب المعطرة",
                    price: "250 ر.س",
                    duration: "-",
                },
                {
                    id: 9,
                    title: "الحمام المغربي الطبيعي",
                    price: "200 ر.س",
                    duration: "-",
                },
            ],
        },
        {
            category: "البديكير",
            icon: Hand,
            services: [
                {
                    id: 10,
                    title: "بديكير لليدين والقدمين مع فوت سبا مساج",
                    price: "350 ر.س",
                    duration: "-",
                },
                {
                    id: 11,
                    title: "بديكير لليدين والقدمين مع فوت سبا",
                    price: "280 ر.س",
                    duration: "-",
                },
                {
                    id: 12,
                    title: "بديكير لليدين والقدمين",
                    price: "220 ر.س",
                    duration: "-",
                },
                {
                    id: 13,
                    title: "بديكير لليدين",
                    price: "150 ر.س",
                    duration: "-",
                },
                {
                    id: 14,
                    title: "بديكير للقدمين",
                    price: "150 ر.س",
                    duration: "-",
                },
            ],
        },
        {
            category: "الجاكوزي",
            icon: Waves,
            services: [
                {
                    id: 15,
                    title: "جلسة جاكوزي استرخاء",
                    price: "70 ر.س",
                    duration: "-",
                },
            ],
        },
        {
            category: "الحلاقة والعناية",
            icon: Scissors,
            services: [
                {
                    id: 16,
                    title: "حلاقة رجالية كلاسيكية",
                    price: "50 ر.س",
                    duration: "-",
                },
                {
                    id: 17,
                    title: "حلاقة فيد",
                    price: "60 ر.س",
                    duration: "-",
                },
                {
                    id: 18,
                    title: "حلاقة بوي",
                    price: "55 ر.س",
                    duration: "-",
                },
                {
                    id: 19,
                    title: "حلاقة أمريكية",
                    price: "65 ر.س",
                    duration: "-",
                },
                {
                    id: 20,
                    title: "حلاقة إيطالية",
                    price: "70 ر.س",
                    duration: "-",
                },
                {
                    id: 21,
                    title: "حلاقة موهوك",
                    price: "75 ر.س",
                    duration: "-",
                },
                {
                    id: 22,
                    title: "حلاقة ديزاينر",
                    price: "80 ر.س",
                    duration: "-",
                },
                {
                    id: 23,
                    title: "حلاقة بيرت",
                    price: "65 ر.س",
                    duration: "-",
                },
                {
                    id: 24,
                    title: "تنظيف اللحية والشنب",
                    price: "40 ر.س",
                    duration: "-",
                },
                {
                    id: 25,
                    title: "حلاقة + تنظيف لحية",
                    price: "80 ر.س",
                    duration: "-",
                },
                {
                    id: 26,
                    title: "صبغ الشعر",
                    price: "100 ر.س",
                    duration: "-",
                },
                {
                    id: 27,
                    title: "صبغ اللحية",
                    price: "60 ر.س",
                    duration: "-",
                },
                {
                    id: 28,
                    title: "فرد الشعر الكيراتين",
                    price: "150 ر.س",
                    duration: "-",
                },
                {
                    id: 29,
                    title: "علاج الشعر بالبروتين",
                    price: "120 ر.س",
                    duration: "-",
                },
            ],
        },
    ];

    // Fetch Services
    useEffect(() => {
        FetchServices();
    }, []);

    return (
        <section section className="pb-20  bg-white" >
            <div className="container">
                <div className="space-y-16">
                    {serviceCategories.map((categoryGroup, categoryIndex) => {
                        const CategoryIcon = categoryGroup.icon;
                        return (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                className="space-y-8"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 pb-6 border-b-2 border-soft-green">
                                    <div className="bg-soft-green p-4 rounded-lg">
                                        <CategoryIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-dark-slate">
                                        {categoryGroup.category}
                                    </h2>
                                </div>

                                {/* Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {services.filter((service) => service.category === categoryGroup.category)?.map((service, serviceIndex) => (
                                        <motion.div
                                            key={service?._id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: serviceIndex * 0.05 }}
                                            className="rounded-lg shadow-soft hover:shadow-lg transition-all duration-300 border border-soft-gray/30 hover:border-soft-green/50 overflow-hidden"
                                        >
                                            {/* Image Section */}
                                            <div className="relative h-48 w-full">
                                                <img
                                                    src={service?.image || 'https://via.placeholder.com/400x200'}
                                                    alt={service?.name}
                                                    loading="lazy"
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                                <div className="absolute bottom-0 right-0 p-4 text-white">
                                                    <h3 className="text-2xl font-bold mb-1">
                                                        {service?.name}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="bg-beige p-6">
                                                {/* discription */}
                                                <div className="py-3">
                                                    <p className="text-md text-dark-slate/70">
                                                        {service?.description}
                                                    </p>
                                                </div>
                                                {/* Service Info */}
                                                <div className="flex items-center justify-between">
                                                    {service?.duration && (
                                                        <div className="flex items-center gap-2">
                                                            <Clock className="w-5 h-5 text-soft-green" />
                                                            <span className="text-sm text-dark-slate/70">
                                                                {service?.duration}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="text-2xl font-bold text-soft-green">
                                                        {service?.price} ر.س  {service?.disPrice && <span className="line-through text-sm text-dark-slate/70">{service?.disPrice} ر.س</span>}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between gap-2 mt-6">
                                                    {/* CTA Button */}
                                                    <Link href={`/booking`} className=" btn-primary text-sm w-11/12 flex items-center justify-center">
                                                        احجز الآن
                                                    </Link>
                                                    {/* view button by Icon */}
                                                    <button className=" btn-primary text-sm ">
                                                        <Eye className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default CompServices;
