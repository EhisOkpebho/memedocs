import {ReactNode} from "react";
import Footer from "./components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='p-4 md:p-8 w-screen min-h-dvh bg-gray-100'>
            <main className='mx-auto w-full lg:w-3/4 xl:w-2/3 flex flex-col gap-4 md:gap-8'>
                {children}
                <Footer />
            </main>
        </div>
    )
}
