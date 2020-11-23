import axios from 'axios';
import { SagaArticlesRequestType, ApiArticleType, articlesDefault } from '../__types__';

export const getArticlesRequest = (data: SagaArticlesRequestType) => {
    const { query, sort } = data;

    //get data and transform
    return axios.get(`/top-headlines?language=en&q=${query}&sortBy=${sort}`, {
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        headers: { 'Authorization': process.env.REACT_APP_API_KEY },
        transformResponse: response => {
            const responseObject = JSON.parse(response);
            const results = responseObject.articles.map((article: ApiArticleType) => {
                return (({
                    title,
                    description,
                    urlToImage: image,
                    url
                }) => ({ 
                    title,
                    description,
                    image,
                    url
                }))(article);
            });
            return { ...articlesDefault, results };
        }
    })
    .then(response => response.data)
    .catch(error => error);
};
