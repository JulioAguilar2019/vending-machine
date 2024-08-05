import { productsApi } from '../api/products.api';
import { IProduct } from '../pages/Home/interfaces/products.interface';

export const getProducts = async (): Promise<IProduct[]> => {
  const { data } = await productsApi.get('/');
  return data;
};
