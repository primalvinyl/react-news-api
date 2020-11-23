import {
    ReduxArticlesType,
    SagaArticlesRequestType,
    articlesDefault,
} from '../__types__';


/********************************* Action Types *************************************/
export const actionTypes = {
    GET_ARTICLES: 'GET_ARTICLES',
    PUT_ARTICLES: 'PUT_ARTICLES',
    CLEAR_ARTICLES: 'CLEAR_ARTICLES',
};


/******************************* Reducer Actions *************************************/
export interface PutArticlesActionType {
    type: typeof actionTypes.PUT_ARTICLES;
    payload: ReduxArticlesType;
}
export const putArticles = (payload: ReduxArticlesType = articlesDefault): PutArticlesActionType => { 
    return {
        type: actionTypes.PUT_ARTICLES,
        payload
    };
};

export interface ClearArticlesActionType {
    type: typeof actionTypes.CLEAR_ARTICLES;
}
export const clearArticles = (): ClearArticlesActionType => { 
    return {
        type: actionTypes.CLEAR_ARTICLES
    };
};


/******************************** Saga Actions **************************************/
export interface GetArticlesActionType {
    type: typeof actionTypes.GET_ARTICLES;
    payload: SagaArticlesRequestType;
}

export const getArticles = (payload: SagaArticlesRequestType): GetArticlesActionType => {
    return {
        type: actionTypes.GET_ARTICLES,
        payload
    };
};
