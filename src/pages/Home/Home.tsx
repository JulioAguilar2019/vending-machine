import { Layout } from "../../layouts/Layout";
import { DeliveredProductList } from "../Delivered/components/DeliveredProductsList";
import { PendingProductList } from "../Pending/components/PendingProductList";
import { ProductList } from "./Components";

export const Home = () => {
    return (
        <Layout>
            <div className="flex flex-1 overflow-hidden">
                <aside className="fixed inset-y-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                    <div className="flex flex-col h-full">
                        <div className="flex-grow">
                            <h2 className="text-lg font-medium text-gray-900">Pending Orders</h2>
                            <PendingProductList />
                        </div>
                        <div className="mt-8">
                            <h2 className="text-lg font-medium text-gray-900">Delivered Orders</h2>
                            <DeliveredProductList />
                        </div>
                    </div>
                </aside>

                <main className="flex-1 lg:pl-20 overflow-y-auto">
                    <div className="xl:pl-96">
                        <div className="px-4 sm:px-6 lg:px-8 lg:py-6">
                            <ProductList />
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}
