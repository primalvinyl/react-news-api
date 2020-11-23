import { combineReducers } from 'redux';
import { actionTypes, PutArticlesActionType } from './actions';
import { ReduxArticlesType, articlesDefault } from '../__types__';


/******************************** Reducers ***************************************/
export const articles = (
    state: ReduxArticlesType = articlesDefault,
    action: PutArticlesActionType
): ReduxArticlesType => {
    switch(action.type){
        case actionTypes.PUT_ARTICLES:
            return { ...state, ...action.payload }
        case actionTypes.CLEAR_ARTICLES:
            return {} as ReduxArticlesType
        default:
            return state
    }
}


/****************************** Root Reducer *************************************/
export default combineReducers({
    articles
});

export interface RootState {
    articles: ReduxArticlesType
}