import { type Coin } from '../../slices/cryptoApi';

export const mockCoins: Partial<Coin>[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 65000,
    market_cap: 1200000000000,
    market_cap_rank: 1,
    high_24h: 66000,
    low_24h: 64000,
    price_change_percentage_24h: 1.5,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    current_price: 3500,
    market_cap: 400000000000,
    market_cap_rank: 2,
    high_24h: 3600,
    low_24h: 3400,
    price_change_percentage_24h: -0.8,
  },
];
