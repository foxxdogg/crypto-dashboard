import { useGetTopCoinsQuery } from '../../slices/cryptoApi';
import { useEffect } from 'react';
import { type Coin } from '../../slices/cryptoApi';
export const Dashboard = () => {
  const {
    data: coins,
    isLoading,
    isError,
  } = useGetTopCoinsQuery('usd', {
    pollingInterval: 15000,
  });

  useEffect(() => {
    coins?.forEach((coin: Coin) => console.log('Coin updated:', coin));
  }, [coins]);

  return (
    <div className="grid">
      {isLoading && (
        <div className="animate-pulse py-10 text-center text-gray-500">Loading coins...</div>
      )}
      {isError && (
        <div className="py-10 text-center font-semibold text-red-500">Failed to load data.</div>
      )}
      {!isLoading && !isError && <div className="dark:text-white">Dashboard</div>}
    </div>
  );
};
