import { Award, Zap, Shield } from 'lucide-react';

/**
 * Features Section Component
 * Design: Modern Professional Style
 * - Three key advantages with icons
 * - Alternating left-right layout
 * - Gold accent lines
 * - Responsive design
 */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Award size={48} className="text-accent" />,
    title: '品质保证',
    description: '所有车型经过严格检测，提供完整的质保服务，让您购车无忧',
  },
  {
    icon: <Zap size={48} className="text-accent" />,
    title: '专业服务',
    description: '资深销售团队，专业的售后服务，为您提供一站式解决方案',
  },
  {
    icon: <Shield size={48} className="text-accent" />,
    title: '优惠政策',
    description: '灵活的付款方案，定期优惠活动，让您享受最佳的购车价格',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            为什么选择我们
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-background rounded-lg">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 pt-20 border-t-2 border-border">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">满意客户</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15年</div>
              <p className="text-muted-foreground">行业经验</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">车型选择</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
