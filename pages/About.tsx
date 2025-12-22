
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Brand Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">关于码隆科技</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              码隆科技成立于 2014 年，总部位于深圳。作为全球领先的人工智能教育技术供应商，我们始终坚持“用技术驱动教育进化”的使命，致力于通过计算机视觉与深度学习技术，为全球教育机构提供智能化转型的核心引擎。
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-blue-700">10+</h4>
                <p className="text-gray-500 text-sm">年技术沉淀</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-700">500+</h4>
                <p className="text-gray-500 text-sm">合作院校</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-700">100+</h4>
                <p className="text-gray-500 text-sm">发明专利</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-700">30+</h4>
                <p className="text-gray-500 text-sm">核心奖项</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img src="https://picsum.photos/800/600?random=30" className="rounded-3xl shadow-xl" alt="Office" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">企业愿景与价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "创新", desc: "追求技术的极致与突破，不满足于现状", icon: "💡" },
              { title: "担当", desc: "对每一位教育者、每一个孩子负责", icon: "🤝" },
              { title: "普惠", desc: "让最前沿的技术惠及每一个角落的教学", icon: "🌱" }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm">
                <div className="text-4xl mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">核心团队</h2>
          <p className="text-gray-500">来自清华、北大、谷歌、微软等顶尖机构的跨界精英</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="text-center group">
              <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                <img src={`https://picsum.photos/300/300?random=${100+i}`} className="w-full h-full object-cover" alt="Member" />
              </div>
              <h4 className="font-bold text-gray-900">核心成员 {i}</h4>
              <p className="text-xs text-blue-700 font-medium">技术合伙人 / 专家</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">联系我们</h2>
              <p className="text-blue-200 mb-12">如果您对我们的产品有任何疑问或合作意向，欢迎随时联络。</p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-xl">📞</span>
                  <div>
                    <p className="text-sm text-blue-300">服务热线</p>
                    <p className="text-lg font-bold">400-000-0000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-xl">📧</span>
                  <div>
                    <p className="text-sm text-blue-300">电子邮箱</p>
                    <p className="text-lg font-bold">service@malong.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-xl">📍</span>
                  <div>
                    <p className="text-sm text-blue-300">公司地址</p>
                    <p className="text-lg font-bold">广东省深圳市南山区粤海街道高新园区 A座</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center">在线预约演示</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="您的姓名" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">所属机构/学校</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="学校名称" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">手机号码</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="手机号码" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">留言需求</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="请简单描述您的需求..."></textarea>
                </div>
                <button type="button" className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors shadow-lg">
                  提交申请
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
