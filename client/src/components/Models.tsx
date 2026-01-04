import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Models Section Component
 * Design: Modern Professional Style
 * - Grid layout with car model cards
 * - Image, name, price, and description
 * - Hover effects with subtle elevation
 * - Gold accent for CTA
 */

interface CarModel {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

const models: CarModel[] = [
  {
    id: 1,
    name: '豪华轿车',
    price: '¥28.8万起',
    image: '/images/car-model-2.jpg',
    description: '优雅的外观设计，舒适的驾乘体验',
    features: ['2.0T引擎', '自动变速', '真皮座椅'],
  },
  {
    id: 2,
    name: '运动SUV',
    price: '¥32.5万起',
    image: '/images/car-model-3.jpg',
    description: '强劲动力，越野能力，时尚外观',
    features: ['2.5L引擎', '四驱系统', '全景天窗'],
  },
  {
    id: 3,
    name: '紧凑SUV',
    price: '¥22.9万起',
    image: '/images/car-model-1.jpg',
    description: '经济实用，安全可靠，家庭首选',
    features: ['1.5T引擎', '智能驾驶', '省油环保'],
  },
];

export default function Models() {
  return (
    <section id="models" className="py-20 bg-background">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            精选车型
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们精心挑选的豪华车型，为您提供最佳的驾驾体验和价值选择
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <Card
              key={model.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {model.name}
                </h3>
                <p className="text-accent font-bold text-lg mb-3">
                  {model.price}
                </p>
                <p className="text-muted-foreground mb-4">
                  {model.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {model.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-secondary text-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-accent hover:bg-amber-600 text-accent-foreground font-semibold">
                  了解详情
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
