import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useModalStore } from '../../../stores/dialogs/dialog-image.store';


export const DialogImage = () => {

    const { isOpen, selectedImage, closeModal } = useModalStore();

    return (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div className="absolute top-0 right-0 pt-4 pr-4">
                            <button
                                type="button"
                                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={closeModal}
                            >
                                <span className="sr-only">Close</span>
                                &times;
                            </button>
                        </div>
                        {selectedImage && (
                            <img src={selectedImage} alt="Product" className="max-w-full h-auto" />
                        )}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
