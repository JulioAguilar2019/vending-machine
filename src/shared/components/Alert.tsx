import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const AlertIcon: React.FC<{ type: 'info' | 'success' | 'error' }> = ({ type }) => {
    switch (type) {
        case 'info':
            return (
                <div className="flex items-center justify-center w-12 bg-blue-500">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                    </svg>
                </div>
            );
        case 'success':
            return (
                <div className="flex items-center justify-center w-12 bg-emerald-500">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                    </svg>
                </div>
            );
        case 'error':
            return (
                <div className="flex items-center justify-center w-12 bg-red-500">
                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                    </svg>
                </div>
            );
        default:
            return null;
    }
};

interface AlertProps {
    type: 'info' | 'success' | 'error';
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    return (
        <Transition
            appear
            show={true}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-2"
            enterTo="opacity-100 translate-y-0 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                    <div className="flex items-start">
                        <AlertIcon type={type} />
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-900">{message}</p>
                        </div>
                        <div className="ml-4 flex flex-shrink-0">
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default Alert;
