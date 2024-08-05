import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { ImageWithLoader } from '../../../shared/components/ImageWithLoader';
import { useAlertStore } from '../../../stores/alerts/alert.store';
import { usePreparedProductStore } from '../../../stores/products/products.store';

export const PendingProductList: React.FC = () => {
    const { preparedProducts, cancelOrder } = usePreparedProductStore();

    const { addAlert } = useAlertStore();


    const handleCancelOrder = (orderId: string) => {
        cancelOrder(orderId);
        addAlert('error', 'Order has been cancelled.');
    };

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
                                        <p className="ml-4">{product.timeRemaining}s</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Quantity: {product.quantity}</p>

                                    <div className="flex">
                                        <button type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={() => handleCancelOrder(product.orderId)}
                                        >
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
