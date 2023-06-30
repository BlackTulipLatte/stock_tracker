import { searchSymbol } from '../util/API';
import fetch from 'jest-fetch-mock';

describe('API Tests', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should search symbol', async () => {
    const query = 'AAPL';
    const expectedResponse = { symbol: 'AAPL', name: 'Apple Inc.' };
    fetch.mockResponseOnce(JSON.stringify(expectedResponse));

    const result = await searchSymbol(query);

    expect(fetch).toHaveBeenCalledWith(
      `https://finnhub.io/api/v1/search?q=${query}&token=ci8ct81r01qnrgm35310ci8ct81r01qnrgm3531g`
    );
    expect(result).toEqual(expectedResponse);
  });

  it('should throw an error when response is not OK', async () => {
    const query = 'AAPL';
    const errorMessage = 'An error has occurred: 404';
    fetch.mockResponseOnce(JSON.stringify({}), { status: 404 });

    await expect(searchSymbol(query)).rejects.toThrow(errorMessage);
  });
});
