import { Button } from '@/components/ui/button';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

/**
 * Contact Section Component
 * Design: Modern Professional Style
 * - Contact information with icons
 * - Contact form
 * - Business hours
 */

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            联系我们
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            有任何问题？我们的团队随时准备为您服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  电话
                </h3>
                <p className="text-muted-foreground">
                  400-123-4567
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  地址
                </h3>
                <p className="text-muted-foreground">
                  北京市朝阳区建国路1号<br />
                  Premium Motors 销售中心
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  邮箱
                </h3>
                <p className="text-muted-foreground">
                  info@premiummotors.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  营业时间
                </h3>
                <p className="text-muted-foreground">
                  周一至周日 9:00 - 18:00<br />
                  节假日照常营业
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  电话
                </label>
                <input
                  type="tel"
                  placeholder="请输入您的电话号码"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  留言
                </label>
                <textarea
                  placeholder="请输入您的留言"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-accent hover:bg-amber-600 text-accent-foreground font-semibold py-3">
                提交留言
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
