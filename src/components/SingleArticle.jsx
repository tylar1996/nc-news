import React, { useEffect, useState } from "react";
import { fetchArticleById, getArticleComments } from "../../utils";
import { Link, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

function SingleArticle() {
  const [article, setArticle] = useState("");
  let { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleById(+articleId)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [articleId]);

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
      <p>{article.votes} votes</p>

      <CommentCard articleId={articleId} />
    </div>
  );
}

export default SingleArticle;
