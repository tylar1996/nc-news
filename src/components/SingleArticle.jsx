import React, { useEffect, useState } from "react";
import { fetchArticleById, getArticleComments, voteArticle } from "../../utils";
import { Link, useParams } from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState("");
  let { articleId } = useParams();

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleViewComments = () => {
    setShowComments(!showComments);
  };

  const handleVote = () => {
    voteArticle(articleId, 1);
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
        setArticle(article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article]);

  return (
    <div className="single-article">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-author">Author: {article.author}</p>
      <img
        className="article-image"
        src={article.articleimgurl}
        alt="Article"
      />
      <p className="article-body">{article.body}</p>
      <p>{article.votes} votes</p>
      <button onClick={() => handleVote()}>Vote</button>

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
