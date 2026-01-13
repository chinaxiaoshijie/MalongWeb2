
import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "智慧数学教学方案",
      scenario: "初高中数学课堂",
      challenges: ["主观几何证明题批改难", "学生解题思路无法追踪", "个性化薄弱点难以归类"],
      features: "码隆AI数学引擎能实时解析手写演算过程，识别逻辑跳步或计算错误，即时反馈。",
      result: "减少教师批改负担 60%，提升学生薄弱环节训练针对性 45%。",
      img: "https://picsum.photos/600/400?random=20"
    },
    {
      title: "全场景理化生实验测评",
      scenario: "实验会考与日常练习",
      challenges: ["考评老师人手不足", "评分主观性强", "实验器材准备繁琐"],
      features: "利用边缘计算摄像头实时捕捉实验操作，自动判定器材摆放、操作顺序、结果读数是否合规。",
      result: "支持千人级同时测评，评分客观性达到 99.9% 以上。",
      img: "https://picsum.photos/600/400?random=21"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-4xl font-bold mb-6">场景化解决方案</h1>
        <p className="max-w-2xl mx-auto px-4 text-gray-400">将AI深度融入教学实战场景，解决教育痛点，创造真实价值。</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {solutions.map((sol, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 mb-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <span className="text-blue-700 font-bold uppercase tracking-widest text-sm">{sol.scenario}</span>
              <h2 className="text-4xl font-bold mt-4 mb-8 text-gray-900">{sol.title}</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    行业痛点
                  </h3>
                  <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 ml-4">
                    {sol.challenges.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    核心能力
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sol.features}</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-900 mb-2">应用成效</h3>
                  <p className="text-blue-800 text-sm italic">“{sol.result}”</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <img src={sol.img} alt={sol.title} className="rounded-3xl shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
