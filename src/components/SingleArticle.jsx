import React, { useEffect, useState } from "react";
import { fetchArticleById, getArticleComments } from "../../utils";
import { Link, useParams } from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState("");
  let { articleId } = useParams();

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleViewComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    getArticleComments(articleId)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchArticleById(+articleId)
      .then((article) => {
        return article;
      })
      .then((article) => {
        setArticle(article);
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

      <button onClick={() => handleViewComments()}>
        {showComments ? "Hide Comments" : "View Comments"}
      </button>
      {showComments &&
        comments.map((comment, index) => (
          <div key={index} className="comment-card">
            <p>{comment.author}</p>
            <p>posted on {comment.created_at}</p>
            <p>{comment.body}</p>
          </div>
        ))}
    </div>
  );
}

export default SingleArticle;
