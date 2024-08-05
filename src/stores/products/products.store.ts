import { create } from 'zustand';
import { IProduct } from '../../pages';
import { useAlertStore } from '../alerts/alert.store';

export interface PreparedProduct {
  orderId: string;
  product: IProduct;
  timeRemaining: number;
  quantity: number;
}

interface PreparedProductState {
  preparedProducts: PreparedProduct[];
  deliveredProducts: PreparedProduct[];
  addPreparedProduct: (product: IProduct, quantity: number) => void;
  decrementTime: () => void;
  clearStorage: () => void;
  cancelOrder: (orderId: string) => void;
}

const generateUniqueId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const usePreparedProductStore = create<PreparedProductState>((set) => ({
  preparedProducts: JSON.parse(
    localStorage.getItem('preparedProducts') || '[]'
  ),
  deliveredProducts: JSON.parse(
    localStorage.getItem('deliveredProducts') || '[]'
  ),

  addPreparedProduct: (product: IProduct, quantity: number) => {
    const timeRemaining = product.preparation_time * quantity;
    const orderId = generateUniqueId();
    const preparedProduct = { orderId, product, timeRemaining, quantity };

    set((state) => {
      const updatedPreparedProducts = [
        ...state.preparedProducts,
        preparedProduct,
      ];
      localStorage.setItem(
        'preparedProducts',
        JSON.stringify(updatedPreparedProducts)
      );
      return { preparedProducts: updatedPreparedProducts };
    });
  },

  decrementTime: () => {
    set((state) => {
      const updatedPreparedProducts = state.preparedProducts.map(
        (preparedProduct) => ({
          ...preparedProduct,
          timeRemaining: preparedProduct.timeRemaining - 1,
        })
      );

      const [stillPending, delivered] = updatedPreparedProducts.reduce(
        ([pending, delivered], product) => {
          if (product.timeRemaining <= 0) {
            delivered.push(product);
          } else {
            pending.push(product);
          }
          return [pending, delivered];
        },
        [[], []] as [PreparedProduct[], PreparedProduct[]]
      );

      if (delivered.length > 0) {
        const newDeliveredProducts = [...state.deliveredProducts, ...delivered];
        localStorage.setItem(
          'deliveredProducts',
          JSON.stringify(newDeliveredProducts)
        );
      }

      if (stillPending.length !== state.preparedProducts.length) {
        localStorage.setItem('preparedProducts', JSON.stringify(stillPending));
      }

      const { addAlert } = useAlertStore.getState();
      delivered.forEach((product) => {
        addAlert(
          'success',
          `${product.product.name} has been successfully prepared!`
        );
      });

      return {
        preparedProducts: stillPending,
        deliveredProducts: [...state.deliveredProducts, ...delivered],
      };
    });
  },

  clearStorage: () => {
    localStorage.removeItem('preparedProducts');
    localStorage.removeItem('deliveredProducts');
    set({
      preparedProducts: [],
      deliveredProducts: [],
    });
  },

  cancelOrder: (orderId) => {
    set((state) => {
      const updatedPreparedProducts = state.preparedProducts.filter(
        (product) => product.orderId !== orderId
      );
      localStorage.setItem(
        'preparedProducts',
        JSON.stringify(updatedPreparedProducts)
      );
      return { preparedProducts: updatedPreparedProducts };
    });
  },
}));

const interval = setInterval(() => {
  usePreparedProductStore.getState().decrementTime();
}, 1000);

window.addEventListener('beforeunload', () => clearInterval(interval));
