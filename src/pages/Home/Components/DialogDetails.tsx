import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { ImageWithLoader } from '../../../shared/components/ImageWithLoader';
import { useAlertStore } from '../../../stores/alerts/alert.store';
import { useModalStore } from '../../../stores/dialogs/dialog-image.store';
import { usePreparedProductStore } from '../../../stores/products/products.store';

export default function DialogDetails() {
    const {
        isOpen,
        closeModal,
        selectedProduct,
        quantity,
        incrementQuantity,
        decrementQuantity,
        setQuantity,
    } = useModalStore();

    const { addPreparedProduct } = usePreparedProductStore();
    const { addAlert } = useAlertStore();

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(event.target.value));
    };

    const handlePrepareProduct = (event: React.FormEvent) => {
        event.preventDefault();
        if (selectedProduct) {
            addPreparedProduct(selectedProduct, quantity);
            addAlert('info', `Preparing ${selectedProduct.name}...`);
            closeModal();
        }
    };

    return (
        <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
                <DialogPanel className="relative inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg sm:max-w-sm lg:max-w-md">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 pointer-events-auto"
                    >
                        <span className="sr-only">Close</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 p-6 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                        <div className="aspect-h-1 md:aspect-h-3 aspect-w-2 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5 pointer-events-none">
                            <ImageWithLoader
                                src={selectedProduct?.thumbnail}
                                alt={selectedProduct?.name}
                                className="object-scale-down object-center"
                            />
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                            <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                                {selectedProduct?.name}
                            </h2>

                            <section aria-labelledby="information-heading" className="mt-1">
                                <h3 id="information-heading" className="sr-only">
                                    Product information
                                </h3>

                                <p className="font-medium text-gray-900">
                                    Preparation time: {selectedProduct?.preparation_time}s
                                </p>
                            </section>

                            <section aria-labelledby="options-heading" className="mt-8">
                                <h3 id="options-heading" className="sr-only">
                                    Product options
                                </h3>

                                <form onSubmit={handlePrepareProduct}>
                                    <div className="flex items-center justify-center mt-4 space-x-2">
                                        <button
                                            type="button"
                                            onClick={decrementQuantity}
                                            className="flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 text-gray-500 hover:bg-gray-100 focus:outline-none shadow-sm"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            id={`quantity-${selectedProduct?.id}`}
                                            name={`quantity-${selectedProduct?.id}`}
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-center text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                            min={1}
                                        />
                                        <button
                                            type="button"
                                            onClick={incrementQuantity}
                                            className="flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 text-gray-500 hover:bg-gray-100 focus:outline-none shadow-sm"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-lg transition duration-150 ease-in-out transform hover:scale-105"
                                    >
                                        Prepare product
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
