import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogArticles } from './blogData';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = blogArticles.find(a => a.id === id);
  console.log("ID from URL:", id);
  console.log("Article found:", article);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="text-white p-6">
        <h2 className="text-xl">Article not found</h2>
        <Link to="/blog" className="text-indigo-400 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="p-6 text-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-400 mb-6">{article.date}</p>
      <div className="prose prose-invert prose-indigo max-w-none text-lg leading-relaxed break-words">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
      <Link to="/" className="mt-8 inline-block text-indigo-400 hover:underline">
       ← Back to Home 
      </Link>
    </div>
  );
};

export default ArticleDetail;
