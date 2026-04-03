import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";


export default function WhatsAppButton() {
  const whatsappNumber = "+966578656379"; // Saudi Arabia format
  const whatsappMessage = "مرحبا، أود الاستفسار عن خدماتكم";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-40 bg-soft-green text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
