import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BarChart2, Cpu, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-malong-dark pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-malong-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-malong-green/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
                🚀 引领教育智能化变革
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 leading-[1.1]">
              用 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-malong-green">AI 视觉</span><br />
              洞见教育未来
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              深度融合计算机视觉与教育场景，为学校提供从教学分析到智能评估的全栈式解决方案，让因材施教成为可能。
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="group flex items-center justify-center bg-malong-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-neon hover:shadow-lg hover:-translate-y-1">
                探索解决方案
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
                了解码隆
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating cards decoration */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/3"
        >
          {/* Add abstract 3D element or illustration here in future */}
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">全场景智慧教育生态</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              不仅仅是技术，更是对教育本质的深度理解与重构
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "智能板书分析",
                desc: "实时数字化课堂板书，智能生成知识图谱，让知识沉淀更简单。",
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                gradient: "from-blue-50 to-blue-100/50"
              },
              {
                title: "学情全维评估",
                desc: "采集多模态学习数据，通过自研算法模型生成个性化成长报告。",
                icon: <BarChart2 className="w-8 h-8 text-green-600" />,
                gradient: "from-green-50 to-green-100/50"
              },
              {
                title: "AI 实验考评",
                desc: "基于动作识别的理化生实验自动评分系统，公平、高效、可追溯。",
                icon: <Cpu className="w-8 h-8 text-orange-600" />,
                gradient: "from-orange-50 to-orange-100/50"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${item.gradient} border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{item.desc}</p>
                <Link to="/products" className="inline-flex items-center text-malong-blue font-semibold group-hover:underline decoration-2 underline-offset-4">
                  了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-malong-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {[
              { num: "500+", label: "合作院校" },
              { num: "10W+", label: "服务学生" },
              { num: "98%", label: "客户满意度" },
              { num: "20+", label: "核心专利" },
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-heading font-extrabold mb-2">{stat.num}</div>
                <div className="text-blue-200 text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">最新动态</h2>
              <div className="h-1.5 w-20 bg-malong-green rounded-full"></div>
            </div>
            <Link to="/news" className="hidden md:flex items-center text-gray-500 hover:text-malong-blue transition-colors">
              查看更多 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img src={`https://picsum.photos/400/300?random=${idx + 10}`} alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">News</div>
                </div>
                <div className="p-8">
                  <div className="text-gray-400 text-sm mb-3">2024.12.2{idx}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-malong-blue transition-colors line-clamp-2">
                    码隆科技发布全新一代智慧教育解决方案，引领行业数字化转型新浪潮
                  </h3>
                  <Link to="/news" className="inline-flex items-center text-sm font-bold text-malong-blue hover:text-malong-dark">
                    阅读全文 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
