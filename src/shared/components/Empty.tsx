import EmptyImage from '../../assets/empty.png';
import { ImageWithLoader } from './ImageWithLoader';

interface Props {
    message: string;
}

export const Empty = ({ message }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-3.5 p-4">
            <ImageWithLoader
                src={EmptyImage}
                alt={'Empty image'}
                className="w-1/2 h-auto mb-4"
            />
            <p className="text-lg font-medium text-gray-900 mb-4">{message}</p>
        </div>
    )
}
