import {Link} from "react-router-dom";
import {User} from "lucide-react";

const Header = () => {
    return (
        <header className='px-4 w-full h-20 flex items-center justify-between rounded-3xl shadow-sm bg-white'>
            <Link to='/' className='flex items-center justify-center gap-x-2 font-extrabold text-lg'>
                <figure className='w-10 aspect-square bg-cover' style={{backgroundImage: "url('/logo.png')"}}/>
                MéméDoc
            </Link>
            <Link to='/auth/login'
                className='px-3 h-8 flex items-center gap-x-2 rounded-md bg-primary uppercase text-xs text-white'>
                <User className='size-4'/>
                Me connecter
            </Link>
        </header>
    )
}

export default Header
