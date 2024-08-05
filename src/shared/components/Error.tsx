import React from 'react';
import ErrorImage from '../../assets/error.png';
import { ImageWithLoader } from './ImageWithLoader';

interface ErrorProps {
    refetch: () => void;
}

export const Error: React.FC<ErrorProps> = ({ refetch }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <ImageWithLoader
                src={ErrorImage}
                alt={'Error image'}
                className="w-1/2 h-auto mb-4"
            />
            <p className="text-lg font-medium text-gray-900 mb-4">Something went wrong</p>
            <button
                onClick={refetch}
                className="px-4 py-2 bg-indigo-600 text-white text-base font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Try Again
            </button>
        </div>
    );
}
