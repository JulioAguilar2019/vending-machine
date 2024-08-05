import { Footer, MobileSidebar, StaticSidebar } from '../shared'

interface Props {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <MobileSidebar />

            <StaticSidebar />

            {children}

            {/* <Footer /> */}
        </>
    )
}
