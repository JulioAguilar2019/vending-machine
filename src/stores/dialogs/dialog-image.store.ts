import { create } from 'zustand';
import { IProduct } from '../../pages';

interface ModalState {
  isOpen: boolean;
  selectedProduct: IProduct | null;
  quantity: number;
  openModal: (product: IProduct) => void;
  closeModal: () => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  setQuantity: (quantity: number) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedProduct: null,
  quantity: 1,
  openModal: (product: IProduct) =>
    set({ isOpen: true, selectedProduct: product, quantity: 1 }),
  closeModal: () => set({ isOpen: false }),
  incrementQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrementQuantity: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : 1,
    })),
  setQuantity: (quantity: number) => set({ quantity }),
}));
