import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Gift, TrendingUp } from 'lucide-react';

/**
 * Offers Section Component
 * Design: Modern Professional Style
 * - Promotional offers with icons
 * - Gold accent highlights
 * - Card-based layout with hover effects
 */

interface Offer {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

const offers: Offer[] = [
  {
    icon: <Zap size={32} className="text-accent" />,
    title: '新年特惠',
    description: '购车立享优惠，最高可省5万元',
    highlight: '优惠至12月31日',
  },
  {
    icon: <Gift size={32} className="text-accent" />,
    title: '赠送礼包',
    description: '免费保养、保险、装饰品等豪华礼包',
    highlight: '价值2万元',
  },
  {
    icon: <TrendingUp size={32} className="text-accent" />,
    title: '以旧换新',
    description: '旧车置换享受额外补贴，评估价格透明',
    highlight: '最高补贴3万',
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-background">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            最新优惠
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            限时优惠活动，机会不容错过
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, idx) => (
            <Card
              key={idx}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-2 border-border hover:border-accent"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="p-3 bg-background w-fit rounded-lg">
                  {offer.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-3">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4">
                {offer.description}
              </p>

              {/* Highlight */}
              <div className="p-3 bg-accent/10 border-l-4 border-accent rounded mb-6">
                <p className="text-accent font-bold">
                  {offer.highlight}
                </p>
              </div>

              {/* CTA */}
              <Button className="w-full bg-accent hover:bg-amber-600 text-accent-foreground font-semibold">
                了解详情
              </Button>
            </Card>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            现在购车，享受最优惠价格
          </h3>
          <p className="text-lg mb-6 text-white/90">
            我们的销售团队已准备好为您服务，立即联系我们获取专属报价
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-amber-600 text-accent-foreground font-semibold px-8 py-6"
          >
            立即咨询
          </Button>
        </div>
      </div>
    </section>
  );
}
