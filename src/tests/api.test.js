import { searchStock, searchQuote, getHistoricalData } from '../util/API';
import fetch from 'jest-fetch-mock';

describe('API Tests', () => {
  it('symbol search', async () => {
    const query = 'AAPL';
    const expectedResponse = {"country":"US","currency":"USD","estimateCurrency":"USD","exchange":"NASDAQ NMS - GLOBAL MARKET","finnhubIndustry":"Technology","ipo":"1980-12-12","logo":"https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.svg","marketCapitalization":3025129.5374395857,"name":"Apple Inc","phone":"14089961010.0","shareOutstanding":15728.7,"ticker":"AAPL","weburl":"https://www.apple.com/"};
    fetch.mockResponseOnce(JSON.stringify(expectedResponse));

    const result = await searchStock(query);
    expect(result).toEqual(expectedResponse);
  });

  it('quote search', async () => {
    // NOTE: THIS TEST MAY FAIL SINCE THE PRICE OF THE STOCK IS VOLATILE. AS LONG AS THE API CALL IS SUCCESSFUL, THE TEST IS CONSIDERED A SUCCESS
    const query = 'AAPL';
    const expectedResponse = {"c":192.36,"d":2.77,"dp":1.461,"h":193.15,"l":191.265,"o":191.63,"pc":189.59,"t":1688139451};
    fetch.mockResponseOnce(JSON.stringify(expectedResponse));

    const result = await searchQuote(query);
    expect(result).toEqual(expectedResponse);
  });

  it('historical data search', async () => {
    // NOTE: THIS TEST MAY FAIL SINCE THE PRICE OF THE STOCK IS VOLATILE. AS LONG AS THE API CALL IS SUCCESSFUL, THE TEST IS CONSIDERED A SUCCESS
    const query = 'AAPL';
    const expectedResponse = {"c":192.36,"d":2.77,"dp":1.461,"h":193.15,"l":191.265,"o":191.63,"pc":189.59,"t":1688139451};
    fetch.mockResponseOnce(JSON.stringify(expectedResponse));

    const result = await getHistoricalData(query, 1, '2020-01-01', '2020-01-02');
    expect(result).toEqual(expectedResponse);
  });




});
