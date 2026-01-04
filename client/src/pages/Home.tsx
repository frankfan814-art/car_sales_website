import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Models from '@/components/Models';
import Features from '@/components/Features';
import Offers from '@/components/Offers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design: Modern Professional Style
 * - Complete landing page with all sections
 * - Responsive design
 * - Smooth scrolling navigation
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Models />
      <Features />
      <Offers />
      <Contact />
      <Footer />
    </div>
  );
}
