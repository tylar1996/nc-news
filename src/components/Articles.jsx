import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../utils";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((articles) => {
        return articles;
      })
      .then((articles) => {
        setArticles(articles);
      });
  }, []);

  return (
    <div className="article-container">
      {articles.map((article) => (
        <div key={article.id} className="article">
          <h2>{article.title}</h2>
          <img src={article.article_img_url} alt="" />
          <p>Author: {article.author}</p>
          <p>Topic: {article.topic}</p>
          <p>{article.votes} votes</p>
          <p>{article.comment_count} comments</p>
          <p>Published: {article.created_at}</p>
        </div>
      ))}
    </div>
  );
}
export default Articles;
