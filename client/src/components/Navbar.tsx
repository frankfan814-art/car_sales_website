import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Navbar Component
 * Design: Modern Professional Style
 * - Fixed top navigation with logo and menu items
 * - Gold accent for CTA button
 * - Responsive mobile menu
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '首页', href: '#home' },
    { label: '车型', href: '#models' },
    { label: '优惠', href: '#offers' },
    { label: '关于', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🚗</span>
          </div>
          <span className="text-xl font-bold text-primary hidden sm:inline">
            Premium Motors
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden sm:inline-flex bg-accent hover:bg-amber-600 text-accent-foreground"
          >
            联系我们
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-accent hover:bg-amber-600 text-accent-foreground">
              联系我们
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
