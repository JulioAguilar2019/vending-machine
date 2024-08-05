import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { ImageWithLoader } from '../../../shared/components/ImageWithLoader';
import { usePreparedProductStore } from '../../../stores/products/products.store';

export const DeliveredProductList: React.FC = () => {
    const { deliveredProducts } = usePreparedProductStore();

    if (deliveredProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <ExclamationCircleIcon className="h-12 w-12 text-gray-400" aria-hidden="true" />
                <p className="mt-2 text-sm text-gray-600">No delivered orders</p>
            </div>
        )
    }

    return (
        <div>
            <div className="mt-8 flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {deliveredProducts.map((product) => (
                        <li key={product.orderId} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <ImageWithLoader
                                    src={product.product.thumbnail}
                                    alt={product.product.name}
                                    className="h-full w-full object-scale-down object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            {product.product.name}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Quantity: {product.quantity}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
