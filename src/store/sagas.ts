import { take, put, call, fork, all } from 'redux-saga/effects';
import { actionTypes, putArticles } from './actions';
import { getArticlesRequest } from './services';
import { articlesDefault, SagaArticlesRequestType } from '../__types__';


/******************************** Workers *************************************/
export function* getArticlesWorker(payload: SagaArticlesRequestType) {
    try {
        yield put(putArticles({ ...articlesDefault, request_status: 'pending' }));
        const response = yield call(getArticlesRequest, payload);
        yield put(putArticles({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArticles({ ...articlesDefault, request_status: 'resolved', error: true }));
    }
}


/******************************* Watchers *************************************/
export function* getArticlesWatcher() {
    while (true) {
        const { payload } = yield take(actionTypes.GET_ARTICLES);
        yield call(getArticlesWorker, payload)
    }
}


/******************************* Root Saga ************************************/
export default function* rootSaga() {
    yield all([
        fork(getArticlesWatcher)
    ]);
} 
