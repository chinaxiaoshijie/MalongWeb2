
import React, { useState } from 'react';

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const tabs = ['全部', '企业动态', '产品资讯', '媒体报道', '行业洞察'];

  const newsItems = [
    { title: "码隆科技助力深圳智慧校园建设试点", date: "2024-12-25", category: "企业动态", summary: "首批 50 所中小学已完成智能理化生实验系统部署，获得师生一致好评。" },
    { title: "2024 年度 AI+教育白皮书正式发布", date: "2024-12-20", category: "行业洞察", summary: "报告深入探讨了生成式AI如何改写传统教学评价体系。" },
    { title: "独家专访：码隆创始人谈 AI 教育的未来", date: "2024-12-15", category: "媒体报道", summary: "如何平衡技术创新与人文关怀？听听码隆创始人的深度思考。" },
    { title: "智能作业批改系统全面支持英语口语评估", date: "2024-12-10", category: "产品资讯", summary: "全新的语音评估模型能精准识别口音偏离度，提供发音矫正建议。" },
    { title: "码隆科技入选 2024 全球教育技术独角兽榜单", date: "2024-12-01", category: "企业动态", summary: "这是公司连续三年荣获此项殊荣，彰显技术领先实力。" },
  ];

  const filteredNews = activeTab === '全部' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">新闻中心</h1>
          <p className="text-gray-500">掌握码隆最新动态，洞悉 AI 教育行业未来</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-blue-700 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="grid grid-cols-1 gap-8">
          {filteredNews.map((news, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
              <div className="w-full md:w-48 h-32 bg-gray-200 rounded-xl flex-shrink-0 flex items-center justify-center text-gray-400">
                <span className="text-2xl font-bold">NEWS</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">{news.category}</span>
                  <span className="text-xs text-gray-400">{news.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-700 cursor-pointer">{news.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{news.summary}</p>
                <button className="text-blue-700 font-bold text-sm">阅读全文 &rarr;</button>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            暂无相关资讯
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
