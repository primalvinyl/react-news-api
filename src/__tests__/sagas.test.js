import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import { getArticles } from '../store/actions';
import { articles } from '../store/reducers';
import { getArticlesWatcher, getArticlesWorker } from '../store/sagas';
import { mockApiArticlesObject, mockRequestObject } from '../__mocks__/mockObjects';

describe('getArticlesWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArticlesObject });
        return expectSaga(getArticlesWorker)
            .withReducer(articles)
            .run();
    });
});

describe('getArticlesWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArticlesObject });
        return expectSaga(getArticlesWatcher)
            .dispatch(getArticles(mockRequestObject))
            .silentRun();
    });
});
