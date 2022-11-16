import { useQuery } from 'react-query';
import { CryptoAPI } from '../modules/CryptoAPI';

export function useGetSupportedCurrenciesQuery() {
  return useQuery('supportedCurrencies', async () => {
    return await CryptoAPI.getSupportedCurrencies();
  });
}
