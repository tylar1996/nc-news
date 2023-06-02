import React, { useEffect, useState } from "react";
import { getArticleComments } from "../../utils";
import { useParams } from "react-router-dom";

function CommentCard() {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let { articleId } = useParams();

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
        setError("Failed to fetch comments. Please try again.");
      });
  }, [articleId]);

  return (
    <div>
      <button onClick={() => handleViewComments()}>
        {showComments ? "Hide Comments" : "View Comments"}
      </button>
      {error && <p className="error-message">{error}</p>}
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

export default CommentCard;
