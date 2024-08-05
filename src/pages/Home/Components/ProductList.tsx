import { useGetProducts } from "../../../hooks/useGetProducts";
import { DialogImage } from "./DialogImage";
import { ProductCard } from './ProductCard';
import { Skeleton } from './Skeleton';

export const ProductList = () => {
    const { products } = useGetProducts();

    if (products.isFetching) {
        return <Skeleton />
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-4">
                    Products
                </h2>
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {products.data?.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>
            </div>
            <DialogImage />

        </div>
    );
};
