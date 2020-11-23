import axios from 'axios';
import { getArticlesRequest } from '../store/services';
import { mockApiArticlesObject } from '../__mocks__/mockObjects';

describe('getArticlesRequest', () => {
    it('gets articles data list', async () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArticlesObject });
        const response = await getArticlesRequest('test', 'test');
        expect(response).toStrictEqual(mockApiArticlesObject);
    });
});
