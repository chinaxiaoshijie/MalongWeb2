import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-malong-dark text-gray-400 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-heading font-extrabold text-white tracking-tight">码隆<span className="text-malong-green">科技</span></span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              致力于将前沿的人工智能与计算机视觉技术应用于教育领域，构建更公平、更高效、更温暖的智慧教育生态。
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-malong-blue hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">快速导航</h4>
            <ul className="space-y-4 text-sm">
              {[
                { name: '首页', path: '/' },
                { name: '产品与服务', path: '/products' },
                { name: '解决方案', path: '/solutions' },
                { name: '新闻中心', path: '/news' },
                { name: '关于我们', path: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-malong-light transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6">核心方案</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">智慧课堂分析</li>
              <li className="hover:text-white transition-colors cursor-pointer">理化生实验AI考评</li>
              <li className="hover:text-white transition-colors cursor-pointer">校园安全预警</li>
              <li className="hover:text-white transition-colors cursor-pointer">教育大数据平台</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">联系方式</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-malong-blue mt-0.5" />
                <span>广东省深圳市南山区<br />粤海街道高新科技园 R2-A</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-malong-blue" />
                <span>400-888-6666</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-malong-blue" />
                <span>contact@malong.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Malong Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">粤ICP备12345678号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
