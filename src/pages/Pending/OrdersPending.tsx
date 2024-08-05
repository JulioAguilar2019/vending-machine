import { ClockIcon } from "@heroicons/react/24/outline";
import React from 'react';
import { Layout } from "../../layouts/Layout";
import { Empty } from "../../shared/components/Empty";
import { ImageWithLoader } from "../../shared/components/ImageWithLoader";
import { useAlertStore } from '../../stores/alerts/alert.store';
import { usePreparedProductStore } from '../../stores/products/products.store';


export const OrdersPending: React.FC = () => {
    const { preparedProducts, cancelOrder } = usePreparedProductStore();
    const { addAlert } = useAlertStore();

    const handleCancelOrder = (orderId: string) => {
        cancelOrder(orderId);
        addAlert('error', 'Order has been cancelled.');
    };

    return (
        <Layout>
            <main>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
                    <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pending Orders</h1>

                    <form className="mt-12">
                        <section aria-labelledby="cart-heading">
                            <ul role="list" className="divide-y divide-gray-200 border-t border-gray-200">
                                {preparedProducts.length === 0 ? (
                                    <Empty message="No pending orders" />
                                ) : (
                                    preparedProducts.map((product) => (
                                        <li key={product.orderId} className="flex py-6">
                                            <div className="flex-shrink-0">
                                                <ImageWithLoader
                                                    src={product.product.thumbnail}
                                                    alt={product.product.name}
                                                    className="h-24 w-24 rounded-md object-scale-down object-center sm:h-32 sm:w-32"
                                                />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h4 className="text-sm">
                                                            <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.product.name}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">Quantity: {product.quantity}</p>
                                                </div>
                                                <div className="mt-4 flex flex-1 items-end justify-between">
                                                    <p className="flex items-center space-x-2 text-sm text-gray-700">
                                                        <ClockIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-300" />
                                                        <span>{`${product.timeRemaining}s remaining`}</span>
                                                    </p>
                                                    <div className="ml-4">
                                                        <button
                                                            type="button"
                                                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => handleCancelOrder(product.orderId)}
                                                        >
                                                            <span>Cancel order</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </section>
                    </form>
                </div>
            </main>
        </Layout>
    );
};
