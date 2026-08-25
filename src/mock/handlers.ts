import { http, HttpResponse } from 'msw';
import { mockCoins } from './data/coinsFixture';

export const handlers = [
  http.get('https://coingecko.com', ({ request }) => {
    const url = new URL(request.url);
    const currency = url.searchParams.get('vs_currency');
    console.log(`[MSW] Request intercepted for: ${currency}`);
    return HttpResponse.json(mockCoins, { status: 200 });
  }),
];
