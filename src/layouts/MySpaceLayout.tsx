import {ReactNode} from "react";
import Header from "../components/Header";
import {Blocks, CircleUser, ListOrdered} from "lucide-react";
import {Link} from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header/>
            <div className='w-full h-64 overflow-hidden rounded-3xl shadow-sm bg-cover'
                 style={{backgroundImage: "url('/pharmacie.jpg')"}}>
                <div
                    className='p-4 w-full h-full flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm'>
                    {/*<img src='/logo.png' width={256} height={256} alt='logo' className='w-1/2 md:w-1/3'/>*/}
                    <h1 className='text-center leading-8 md:leading-10 font-extrabold text-2xl md:text-4xl text-white'>Bon <span
                        className='text-pharmacist'>retour</span> parmis nous !</h1>
                </div>
            </div>
            <div className='w-full flex flex-row rounded-3xl shadow-sm bg-white font-medium text-gray-900'>
                <Link to='/profile'
                    className='py-4 w-full  flex items-center justify-center rounded-3xl rounded-r-none border border-b-2 hover:border-primary/50 hover:bg-primary/10 hover:text-primary tracking-wider duration-150'>
                    <CircleUser className='mr-2 mb-1 size-5'/>
                    <span className='hidden md:block'>Profil</span>
                </Link>
                <Link to='/commands'
                      className='py-4 w-full flex items-center justify-center border border-b-2 hover:border-primary/50 hover:bg-primary/10 hover:text-primary tracking-wider duration-150'>
                    <ListOrdered className='mr-1 mb-1 size-5'/>
                    <span className='hidden md:block'>Liste des commandes</span>
                </Link>
                <Link to='/stock'
                      className='py-4 w-full  flex items-center justify-center rounded-3xl rounded-l-none border border-b-2 hover:border-primary/50 hover:bg-primary/10 hover:text-primary tracking-wider duration-150'>
                    <Blocks className='mr-1 mb-1 size-5'/>
                    <span className='hidden md:block'>Gestion du stock</span>
                </Link>
            </div>
            {children}
        </>
    )
}
