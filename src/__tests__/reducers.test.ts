import { articles } from '../store/reducers';
import { putArticles } from '../store/actions';
import { articlesDefault } from '../__types__';

describe('articles', () => {
    it('should return the initial state', () => {
        const response = articles(undefined, putArticles());
        expect(response).toEqual(articlesDefault);
    })
    it('should put new articles list', () => {
        const response = articles(undefined, putArticles(articlesDefault));
        expect(response).toEqual(articlesDefault);
    });
});
