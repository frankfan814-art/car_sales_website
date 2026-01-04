import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

/**
 * Hero Section Component
 * Design: Modern Professional Style
 * - Large background image with overlay
 * - Bold typography with Playfair Display
 * - Gold accent CTA button
 * - Responsive layout
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: 'url(/images/hero-banner.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container z-10 text-center text-white max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          驾驭梦想
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md font-light">
          精选豪华车型，专业服务，让您的每一次出行都成为享受
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-amber-600 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-lg transition-all hover:shadow-lg hover:scale-105"
          >
            浏览车型
            <ChevronRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white font-semibold text-lg px-8 py-6 rounded-lg backdrop-blur-sm"
          >
            了解更多
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
