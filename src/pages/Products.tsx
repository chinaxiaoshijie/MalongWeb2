
import React from 'react';

const Products: React.FC = () => {
  const categories = [
    {
      id: "teaching-aids",
      name: "教学辅助工具",
      description: "增强课堂互动，提升教学直观性",
      products: [
        { name: "智能板书同步系统", features: "多点触控识别、云端同步、实时转录", icon: "✍️" },
        { name: "AR 教学沙盘", features: "虚拟现实结合、沉浸式地理/历史学习", icon: "🌍" },
        { name: "智慧教材识别器", features: "随扫随看、微课内容自动关联", icon: "📑" }
      ]
    },
    {
      id: "assessment",
      name: "智能评估系统",
      description: "自动批改与学习行为深度分析",
      products: [
        { name: "理化生实验AI测评", features: "操作步骤规范性实时监测、评分精准", icon: "🧪" },
        { name: "数学主观题批改引擎", features: "手写识别、解题思路分析、错因归纳", icon: "🔢" },
        { name: "体育动作识别终端", features: "多人同时监测、动作矫正建议", icon: "🏃" }
      ]
    },
    {
      id: "custom",
      name: "定制化服务",
      description: "满足多样化教学需求的一站式AI方案",
      products: [
        { name: "校本资源数字化", features: "私有化模型训练、专属知识库构建", icon: "🏰" },
        { name: "定制化教学机器人", features: "多轮对话、个性化辅导交互", icon: "🤖" }
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-gray-900">产品与服务</h1>
          <p className="mt-4 text-xl text-gray-500">以技术为核心，为教育者和学习者提供最前沿的AI工具</p>
        </div>

        <div className="space-y-32">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-2 h-10 bg-blue-700 rounded-full"></div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{cat.name}</h2>
                  <p className="text-gray-500">{cat.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.products.map((prod, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="text-4xl mb-6">{prod.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{prod.name}</h3>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                      主要特点：{prod.features}
                    </p>
                    <button className="text-blue-700 font-bold text-sm border-b-2 border-blue-100 hover:border-blue-700 pb-1 transition-all">
                      申请试用
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-32 max-w-5xl mx-auto bg-blue-700 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">没有找到合适的方案？</h2>
          <p className="text-blue-100 mb-10 text-lg">我们的专家团队可以为您提供一对一的深度咨询与定制化方案策划。</p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors">
            立即预约专家咨询
          </button>
        </div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Products;
