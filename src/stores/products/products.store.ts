import { create } from 'zustand';
import { IProduct } from '../../pages';

export interface PreparedProduct {
  product: IProduct;
  timeRemaining: number;
  quantity: number;
}

interface PreparedProductState {
  preparedProducts: PreparedProduct[];
  addPreparedProduct: (product: IProduct, quantity: number) => void;
}

export const usePreparedProductStore = create<PreparedProductState>((set) => ({
  preparedProducts: [],
  addPreparedProduct: (product: IProduct, quantity: number) => {
    const timeRemaining = product.preparation_time * quantity;
    const preparedProduct = { product, timeRemaining, quantity };

    set((state) => ({
      preparedProducts: [...state.preparedProducts, preparedProduct],
    }));

    const storedProducts = JSON.parse(
      localStorage.getItem('preparedProducts') || '[]'
    );
    storedProducts.push(preparedProduct);
    localStorage.setItem('preparedProducts', JSON.stringify(storedProducts));
  },
}));
