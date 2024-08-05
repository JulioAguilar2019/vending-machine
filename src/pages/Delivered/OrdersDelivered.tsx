import { Layout } from "../../layouts/Layout";
import { usePreparedProductStore } from "../../stores/products/products.store";

export const OrdersDelivered = () => {
    const { deliveredProducts, prepareAgain } = usePreparedProductStore();

    return (
        <Layout>
            <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8">
                <div className="max-w-xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Your Orders</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Check your delivered orders and prepare them again.
                    </p>
                </div>

                <div className="mt-12 space-y-16 sm:mt-16">
                    {deliveredProducts.map((order) => (
                        <section key={order.orderId} aria-labelledby={`${order.orderId}-heading`}>
                            <div className="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0">
                                <h2 id={`${order.orderId}-heading`} className="text-lg font-medium text-gray-900 md:flex-shrink-0">
                                    Order #{order.orderId}
                                </h2>
                            </div>

                            <div className="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200">
                                <div key={order.product.id} className="py-6 sm:flex">
                                    <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                                        <img
                                            alt={order.product.name}
                                            src={order.product.thumbnail}
                                            className="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                                        />
                                        <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                <a href="#">{order.product.name}</a>
                                            </h3>
                                            <p className="truncate text-sm text-gray-500">
                                                <span>{order.product.name}</span>{' '}
                                                <span aria-hidden="true" className="mx-1 text-gray-400">
                                                    &middot;
                                                </span>{' '}
                                                <span>Quantity: {order.quantity}</span>
                                            </p>
                                            <p className="mt-1 font-medium text-gray-900">{order.timeRemaining} seconds</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                                        <button
                                            type="button"
                                            onClick={() => prepareAgain(order.product, order.quantity)}
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                                        >
                                            Prepare again
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </Layout>
    );
};
