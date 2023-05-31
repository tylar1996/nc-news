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
