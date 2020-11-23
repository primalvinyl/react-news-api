import { actionTypes, putArticles, getArticles } from '../store/actions';
import { articlesDefault } from '../__types__';
import { mockRequestObject } from '../__mocks__/mockObjects';


describe('putArticles', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.PUT_ARTICLES,
            payload: articlesDefault
        };
        const actualResult = putArticles(articlesDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})


describe('getArticles', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.GET_ARTICLES,
            payload: mockRequestObject
        };
        const actualResult = getArticles(mockRequestObject);
        expect(actualResult).toEqual(expectedResult);
    })
})
