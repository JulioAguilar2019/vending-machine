import { PreparedProduct } from "../../../stores/products/products.store";
import { handleImageError } from "../../../utilities/handleImageError";

export const PendingProductList = () => {

    const preparedProductsString = localStorage.getItem('preparedProducts');
    const preparedProducts: PreparedProduct[] = preparedProductsString ? JSON.parse(preparedProductsString) : [];

    return (
        <div className="mt-8">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {preparedProducts.map((product) => (
                        <li key={product.product.id} className="flex py-6">
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
                                        <p className="ml-4">{product.timeRemaining}</p>
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
    )
}
