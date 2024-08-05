import create from 'zustand';

interface ModalState {
  isOpen: boolean;
  selectedImage: string | null;
  openModal: (image: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedImage: null,
  openModal: (image: string) => set({ isOpen: true, selectedImage: image }),
  closeModal: () => set({ isOpen: false, selectedImage: null }),
}));
