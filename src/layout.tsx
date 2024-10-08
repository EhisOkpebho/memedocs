import {ReactNode} from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='p-4 md:p-8 w-screen min-h-dvh bg-gray-100'>
            {children}
        </div>
    )
}
