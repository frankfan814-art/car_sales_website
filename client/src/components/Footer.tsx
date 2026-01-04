import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

/**
 * Footer Component
 * Design: Modern Professional Style
 * - Company info and links
 * - Social media links
 * - Copyright information
 */

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">🚗</span>
              </div>
              <span className="text-xl font-bold">Premium Motors</span>
            </div>
            <p className="text-white/70">
              专业的汽车销售服务，为您提供最优质的购车体验
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="#models" className="hover:text-accent transition-colors">
                  车型
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-accent transition-colors">
                  优惠
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  联系
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">服务</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  新车销售
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  二手车
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  售后服务
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  融资方案
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">关注我们</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
            <p>&copy; 2024 Premium Motors. 版权所有。</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                使用条款
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
