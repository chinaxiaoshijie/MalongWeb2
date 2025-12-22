
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-malong-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            className="w-full h-full object-cover opacity-30" 
            alt="Hero background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight mb-6">
              码隆科技：<span className="text-malong-yellow">AI赋能教育</span><br />
              开启智慧教学新篇章
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              我们提供顶尖的AI视觉与感知技术，致力于提升校园教学效率、优化学习体验，助力教育公平与智能化转型。
            </p>
            <div className="flex space-x-4">
              <Link to="/products" className="bg-malong-yellow text-blue-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                了解产品
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all">
                关于我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心产品与服务</h2>
            <div className="w-20 h-1.5 bg-malong-blue mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
              全方位AI教学辅助生态，满足不同学科、不同阶段的智慧化建设需求。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "教学辅助工具",
                desc: "实时识别教学板书、教材内容，提供智能批注与多媒体资源联动。",
                icon: "📘",
                color: "bg-blue-50"
              },
              {
                title: "智能评估系统",
                desc: "基于深度学习的作业批改与学习行为分析，自动生成多维度评估报告。",
                icon: "📊",
                color: "bg-green-50"
              },
              {
                title: "定制化教育AI",
                desc: "针对特定院校与学科提供个性化算法模型，深度贴合教学实际场景。",
                icon: "⚙️",
                color: "bg-yellow-50"
              }
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} p-10 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group`}>
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <Link to="/products" className="mt-6 inline-block text-blue-700 font-semibold hover:translate-x-1 transition-transform">
                  查看详情 &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-900">合作伙伴与客户案例</h2>
              <p className="mt-4 text-gray-500">已服务全国超过500家重点教育机构与知名学校</p>
            </div>
            <Link to="/solutions" className="mt-6 md:mt-0 text-blue-700 font-bold border-b-2 border-blue-700 pb-1">
              查看全部成功案例
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <img key={i} src={`https://picsum.photos/120/40?random=${i}`} alt="logo" className="grayscale hover:grayscale-0 transition-all cursor-pointer" />
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">最新动态</h2>
            <div className="w-16 h-1 bg-malong-green mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "2024.12.25",
                tag: "企业新闻",
                title: "码隆科技荣获年度 AI+教育技术创新奖",
                img: "https://picsum.photos/400/250?random=10"
              },
              {
                date: "2024.12.18",
                tag: "产品发布",
                title: "全新智能理化生实验评估系统 2.0 正式上线",
                img: "https://picsum.photos/400/250?random=11"
              },
              {
                date: "2024.12.05",
                tag: "行业合作",
                title: "与清华大学教育学院达成战略合作协议",
                img: "https://picsum.photos/400/250?random=12"
              }
            ].map((news, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <img src={news.img} className="w-full h-48 object-cover" alt={news.title} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-700 px-2 py-1 bg-blue-50 rounded uppercase tracking-wider">{news.tag}</span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 hover:text-blue-700 cursor-pointer">{news.title}</h4>
                  <Link to="/news" className="text-sm font-medium text-gray-500 hover:text-blue-700">阅读全文 &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
