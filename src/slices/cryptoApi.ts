import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/',
    prepareHeaders: (headers) => {
      const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;
      if (apiKey) {
        headers.set('x-cg-demo-api-key', apiKey);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCoins: builder.query<Coin[], string>({
      query: (currency = 'usd') => ({
        url: 'coins/markets',
        params: {
          vs_currency: currency,
          order: 'market_cap_desc',
          per_page: 20,
          page: 1,
          sparkline: false,
        },
      }),
    }),
  }),
});

export const { useGetTopCoinsQuery } = cryptoApi;
export { type Coin };
