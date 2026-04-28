import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

/**
 * Main Layout Component
 * Wraps all pages with consistent header, footer, and floating elements
 */

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
