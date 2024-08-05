import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../actions';

export const useGetProducts = () => {
  const products = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 60,
  });

  return {
    products,
  };
};
