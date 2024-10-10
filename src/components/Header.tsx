import {Link, useNavigate} from "react-router-dom";
import {useGetMe} from "../utils/utils";
import {CircleUser, Cross, PowerCircle, Stethoscope, User} from "lucide-react";
import {useDispatch} from "react-redux";
import {clearUser} from "../redux/userSlice";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const me = useGetMe()

    function handleLogout() {
        dispatch(clearUser())
        navigate('/')
    }

    function getAppropriateUserIcon() {
        switch (me.type) {
            case 'pharmacist':
                return <Cross className='mr-1 size-3.5'/>
            case 'doctor':
                return <Stethoscope className='mr-1 size-3.5'/>
            default:
                return <CircleUser className='mr-1 size-4'/>
        }
    }

    return (
        <header className='px-4 w-full h-20 flex items-center justify-between rounded-3xl shadow-sm bg-white'>
            <Link to='/' className='flex items-center justify-center gap-x-2 font-extrabold text-lg'>
                <figure className='w-10 aspect-square bg-cover' style={{backgroundImage: "url('/logo.png')"}}/>
                MéméDocs
            </Link>
            {
                me.isVisitor ? (
                    <Link to='/auth/login'
                          className='px-3 h-10 sm:h-8 flex items-center gap-x-2 rounded-md bg-primary uppercase text-xs text-white hover:brightness-95 duration-150'>
                        <User className='size-4'/>
                        <span className='hidden sm:block'>Me connecter</span>
                    </Link>
                ) : (
                    <div className='flex gap-x-2'>
                        <Link to={me.isVisitor ? '/auth/login' : '/profile'}
                              className='px-3 h-10 sm:h-8 flex items-center rounded-md bg-primary uppercase text-xs text-white hover:brightness-95 duration-150'>
                            { me.isVisitor ? <User className='mr-2 size-3.5'/> :  getAppropriateUserIcon() }
                            <span className='hidden sm:block'>{ me.isVisitor ? 'Me connecter' : me.identifier }</span>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className='px-3 h-10 sm:h-8 flex items-center gap-x-2 rounded-md bg-red-500 uppercase text-xs text-white hover:brightness-95 duration-150'>
                            <PowerCircle className='size-4'/>
                            <span className='hidden sm:block'>Me déconnecter</span>
                        </button>
                    </div>
                )
            }
        </header>
    )
}

export default Header
