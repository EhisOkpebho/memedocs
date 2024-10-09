import {ReactNode} from "react"
import {cs} from "../utils/utils";

type Props = {
    title: string
    position: 'left' | 'right'
    children: ReactNode
}

export default function AuthenticationLayout({ title, position, children }: Props) {
    return (
        <div className={cs('md:h-[70vh] overflow-hidden flex flex-col md:flex-row rounded-3xl shadow-sm bg-white', position === 'right' && 'md:flex-row-reverse')}>
            <div className='md:h-full w-full bg-cover bg-primary' style={{backgroundImage: "url('/pharmacie.jpg')"}}>
                <div
                    className='py-4 w-full h-full flex flex-col items-center justify-center space-y-1 bg-black/50 backdrop-blur-sm'>
                    <img src='/logo.png' width={256} height={256} alt='logo' className='w-1/2'/>
                    {/*<h1 className='font-extrabold text-4xl text-white'>MéméDocs</h1>*/}
                </div>
            </div>
            <div className='py-8 w-full h-full text-gray-800'>
                <h1 className='mb-8 px-8 text-center font-bold text-3xl underline underline-offset-4 decoration-primary'>
                    {title}
                </h1>
                <form className='pb-32 w-full h-full flex flex-col items-center gap-y-8'>
                    {children}
                </form>
            </div>
        </div>
    )
}
