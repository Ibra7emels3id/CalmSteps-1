import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import icon from "../../public/img/map-pin-svgrepo-com.svg";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);


  const branches = [
    {
      name: "الرمال",
      number: "966500000001",
      icon: icon,
    },
    {
      name: "وادي لين",
      number: "966500000002",
      icon: icon,
    },
    {
      name: "الشفا",
      number: "966500000003",
      icon: icon,
    },
    {
      name: "العليا",
      number: "966500000004",
      icon: icon,
    },
  ];

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = "مرحبا، أود الاستفسار عن خدماتكم";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Menu Items */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="absolute bottom-20 left-0 flex flex-col gap-3 mb-4"
      >
        {branches.map((branch, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            onClick={() => handleWhatsAppClick(branch.number)}
            className="flex items-center gap-3 bg-white text-dark-slate px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-soft-green hover:text-white whitespace-nowrap"
            aria-label={`Contact ${branch.name} on WhatsApp`}
          >
            <span className="text-xl">
              <img className="w-6 h-8" src={branch.icon} alt="" />
            </span>
            <span className="font-semibold text-sm w-18">{branch.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-soft-green text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative"
        aria-label="Open WhatsApp menu"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Badge indicator */}
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"
          />
        )}
      </motion.button>
    </div>
  );
}
