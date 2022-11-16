import { useQuery } from 'react-query';
import { CryptoAPI } from '../modules/CryptoAPI';

export function useGetPriceChangesQuery() {
  return useQuery('priceChanges', async () => {
    return await CryptoAPI.getPriceChanges();
  });
}
