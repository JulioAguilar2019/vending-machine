import { useGetProducts } from "../../../hooks/useGetProducts";
import { Error } from "../../../shared";
import DialogDetails from "./DialogDetails";
import { ProductCard } from './ProductCard';
import { Skeleton } from './Skeleton';

export const ProductList = () => {
    const { products } = useGetProducts();

    if (products.isFetching) {
        return <Skeleton />
    }

    if (products.isError) {
        return <Error refetch={products.refetch} />
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-4">
                    Products
                </h2>
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mb-2">
                    {products.data?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <DialogDetails />

        </div>
    );
};
