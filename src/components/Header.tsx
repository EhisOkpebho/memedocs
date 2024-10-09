import {Link} from "react-router-dom";
import {useGetMe} from "../utils/utils";
import {User} from "lucide-react";

const Header = () => {
    const me = useGetMe()

    return (
        <header className='px-4 w-full h-20 flex items-center justify-between rounded-3xl shadow-sm bg-white'>
            <Link to='/' className='flex items-center justify-center gap-x-2 font-extrabold text-lg'>
                <figure className='w-10 aspect-square bg-cover' style={{backgroundImage: "url('/logo.png')"}}/>
                MéméDoc
            </Link>
            {
                me ? (
                    // <Link to='/auth/login'
                    //       className='px-3 h-10 sm:h-8 flex items-center gap-x-2 rounded-md bg-primary uppercase text-xs text-white'>
                    //     <User className='size-4'/>
                    //     <span className='hidden sm:block'>Me connecter</span>
                    // </Link>
                    <div className='font-medium text-gray-900'>
                        <User className='mr-1 mb-1 size-4 inline' />
                        <span>{me.identifier}</span>
                    </div>
                ) : (
                    <div>
                        <span>{me.identifier}</span>
                    </div>
                )
            }
        </header>
    )
}

export default Header
