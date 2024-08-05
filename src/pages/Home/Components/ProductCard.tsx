import NotFoundImage from '../../../assets/imageNotFound.png';
import { IProduct } from "../interfaces/products.interface";
import { useModalStore } from '../../../stores/dialogs/dialog-image.store';

interface Props {
    product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
    const { openModal } = useModalStore();

    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = NotFoundImage;
    };

    return (
        <div
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white pointer-events-none"
        >
            <div className="aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96">
                <img
                    alt={product.name}
                    src={product.thumbnail}
                    onError={handleImageError}
                    className="h-full w-full object-scale-down object-center sm:h-full sm:w-full pointer-events-auto"
                    onClick={() => openModal(product.thumbnail)}
                />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-lg font-medium text-gray-900">
                    <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </h3>
                <p className="text-sm text-gray-600">Preparation time: {product.preparation_time}s</p>
            </div>
        </div>
    );
}
