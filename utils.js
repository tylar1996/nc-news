import axios from "axios";

const api = axios.create({
  baseURL: "https://ncnewshenry.onrender.com/api/",
});

export const fetchArticles = () => {
  return api
    .get(`/articles`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => console.log(err));
};

export const fetchArticleById = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const voteArticle = (article_id, num) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: num })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
