/******************************* Types *************************************/
export interface ReduxArticleType {
    title: string;
    description: string;
    image: string;
    url: string;
}

export interface ReduxArticlesType {
    results: ReduxArticleType[];
    error: boolean;
    error_message: string;
    request_status: string;
}

export interface SagaArticlesRequestType {
    query: string;
    sort: string;
}

export interface ApiArticleType {
    title: string;
    description: string;
    urlToImage: string;
    url: string;
}


/*************************** Default Values ********************************/
export const articlesDefault: ReduxArticlesType = {
    results: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};
