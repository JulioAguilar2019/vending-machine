import { Layout } from "../../layouts/Layout";
import { PendingProductList } from "../Pending/components/PendingProductList";
import { ProductList } from "./Components";

export const Home = () => {
    return (
        <Layout>
            <main className="lg:pl-20">
                <div className="xl:pl-96">
                    <div className="px-4 sm:px-6 lg:px-8 lg:py-6">
                        <ProductList />
                    </div>
                </div>
            </main>

            <aside className="fixed inset-y-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                <PendingProductList />
            </aside>
        </Layout>
    )
}
