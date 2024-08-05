import { Footer, MobileSidebar, StaticSidebar } from '../shared'

interface Props {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <MobileSidebar />
            <StaticSidebar />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
            <Footer />
        </div>
    )
}
