import React, { useState } from 'react';
import NotFoundImage from '../../assets/imageNotFound.png';
import { Loader } from './Loader';

interface ImageWithLoaderProps {
    src: string | undefined;
    alt: string | undefined;
    className?: string;
}

export const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ src, alt, className }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setError(true);
        setLoading(false);
        event.currentTarget.src = NotFoundImage;
    };

    return (
        <>
            {loading && !error && (
                <div className="flex items-center justify-center z-10">
                    <Loader />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                onLoad={handleLoad}
                onError={handleError}
            />
        </>
    );
};
