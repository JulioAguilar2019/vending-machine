import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { usePreparedProductStore } from '../../../stores/products/products.store';
import { handleImageError } from '../../../utilities/handleImageError';

export const PendingProductList: React.FC = () => {
    const { preparedProducts } = usePreparedProductStore();

    if (preparedProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <ExclamationCircleIcon className="h-12 w-12 text-gray-400" aria-hidden="true" />
                <p className="mt-2 text-sm text-gray-600">No pending orders</p>
            </div>
        )
    }

    return (
        <div className="mt-8">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {preparedProducts.map((product) => (
                        <li key={product.orderId} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    alt={product.product.name}
                                    src={product.product.thumbnail}
                                    onError={handleImageError}
                                    className="h-full w-full object-scale-down object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            {product.product.name}
                                        </h3>
                                        <p className="ml-4">{product.timeRemaining}s</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Quantity: {product.quantity}</p>

                                    <div className="flex">
                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Cancel Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
