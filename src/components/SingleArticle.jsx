import React, { useEffect, useState } from "react";
import { fetchArticleById, getArticleComments, voteArticle } from "../../utils";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const [article, setArticle] = useState("");
  let { articleId } = useParams();

  const [comments, setComments] = useState([]);
  const handleViewComments = () => {
    if (comments.length === 0) {
      getArticleComments(articleId)
        .then((comments) => {
          setComments(comments);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setComments([]);
    }
  };

  const handleVote = () => {
    voteArticle(articleId)
      .then((vote) => {
        setArticle(vote);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

      <button onClick={handleVote}>Vote Here👍🏻 </button>
      <p>{article.votes} votes</p>

      <button onClick={handleViewComments}>
        {comments.length === 0 ? "View Comments" : "Hide Comments"}
      </button>

      {comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <p>{comment.author}</p>
          <p>posted on {comment.created_at}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default SingleArticle;
