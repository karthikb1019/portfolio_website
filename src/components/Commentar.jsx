import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpen } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Building My Portfolio with React and Tailwind",
    summary: "A behind-the-scenes look at how I built this portfolio, from UI design to component structure.",
    date: "July 10, 2025",
    tags: ["React", "TailwindCSS", "Portfolio"],
  },
  {
    id: 2,
    title: "5 Tips to Improve Front-End Performance",
    summary: "Boost your website's speed and efficiency with these essential front-end optimization techniques.",
    date: "June 25, 2025",
    tags: ["Performance", "Frontend", "Best Practices"],
  },
  // Add more articles here
];

const Articles = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });
  }, []);

  return (
    <div
      className="w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl"
      data-aos="fade-up"
    >
      <div className="p-6 border-b border-white/10" data-aos="fade-down">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/20">
            <BookOpen className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">
            Blobs & Articles <span className="text-indigo-400">({articles.length})</span>
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className="bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-xl transition-all group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h4 className="text-white text-lg font-semibold">{article.title}</h4>
            <p className="text-gray-300 text-sm mt-1">{article.summary}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-400">{article.date}</span>
              <div className="flex gap-2 flex-wrap">
                {article.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs bg-indigo-500/20 text-indigo-400 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
