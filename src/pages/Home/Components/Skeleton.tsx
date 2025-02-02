export const Skeleton = () => {
    return (
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto animate-pulse">

                <h2 className="w-64 h-2  mt-4 bg-gray-200 rounded-lg sm:w-80"></h2>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="w-full">
                        <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                    </div>

                    <div className="w-full">
                        <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                    </div>

                    <div className="w-full">
                        <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
                    </div>
                </div>
            </div>
        </section>
    );
};
