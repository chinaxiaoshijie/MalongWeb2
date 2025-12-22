
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">码隆科技</h3>
            <p className="text-sm leading-relaxed mb-6">
              码隆科技致力于通过先进的人工智能技术赋能教育，打造更智能、更高效的教学环境。
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs">W</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs">Z</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs">X</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">快速链接</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400">首页</Link></li>
              <li><Link to="/products" className="hover:text-blue-400">产品与服务</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-400">行业解决方案</Link></li>
              <li><Link to="/news" className="hover:text-blue-400">新闻中心</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">核心业务</h4>
            <ul className="space-y-4 text-sm">
              <li>教学辅助工具</li>
              <li>智能评估系统</li>
              <li>定制化方案</li>
              <li>AI 视觉分析</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <span className="mr-2">📍</span> 广东省深圳市南山区高新园区
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span> 400-000-0000
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> contact@malong.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs">
          <p>© 2024 码隆科技 (Malong Technologies). 保留所有权利. 粤ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
