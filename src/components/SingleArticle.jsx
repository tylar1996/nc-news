import React, { useEffect, useState } from "react";
import { fetchArticleById } from "../../utils";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState("");
  let { articleId } = useParams();

  useEffect(() => {
    fetchArticleById(+articleId)
      .then((article) => {
        setArticle(article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="single-article">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-author">Author: {article.author}</p>
      <img
        className="article-image"
        src={article.article_img_url}
        alt="Article"
      />
      <p className="article-body">{article.body}</p>
    </div>
  );
}

export default SingleArticle;
