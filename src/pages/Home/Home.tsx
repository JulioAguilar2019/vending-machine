import { Layout } from "../../layouts/Layout";
import { ProductList } from "./Components";


export const Home = () => {
    return (
        <Layout>
            <main className="lg:pl-20">
                <div className="xl:pl-96">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        <ProductList />
                    </div>
                </div>
            </main>

            <aside className="fixed inset-y-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                <h2>Test 2</h2>
            </aside>
        </Layout>
    )
}
