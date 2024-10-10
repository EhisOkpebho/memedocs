import AuthenticationLayout from "../layouts/AuthenticationLayout";
import {Link, useNavigate} from "react-router-dom";
import FormInput from "../components/FormInput";
import {ArrowRight} from "lucide-react";
import {UserDtoTypes} from "../types/user.types";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/userSlice";

const TEST_ONLY_USERS: UserDtoTypes[] = [
        {
            isVisitor: false,
            email: 'jane.doe@gmail.com',
            firstname: 'Jane',
            lastname: 'Doe',
            identifier: 'Jane DOE',
            type: 'doctor',
        },
        {
            isVisitor: false,
            email: 'john.doe@gmail.com',
            firstname: 'John',
            lastname: 'Doe',
            identifier: 'John DOE',
            type: 'pharmacist',
            pharmacyId: '8751ad0c-80ba-484b-9b67-f5c9165a15ad'
        }
    ]

export default function Login() {
    const router = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    function handleLogin() {
        const user = TEST_ONLY_USERS.find((user) => user.email === email)
        if (user) {
            dispatch(setUser(user))
            router('/')
        }
    }

    return (
        <AuthenticationLayout title='Connexion' position='left'>
            <div className='px-8 w-full overflow-y-auto flex flex-col gap-y-8'>
                <FormInput label='Adresse email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='h-14 text-base' fill/>
                <FormInput label='Mot de passe' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='h-14 text-base' fill/>
            </div>
            <div className='px-8 w-full'>
                <button
                    onClick={handleLogin}
                    className='w-full h-14 flex items-center justify-center rounded-lg bg-primary tracking-wide uppercase font-medium text-white hover:brightness-95 duration-150'>
                    <ArrowRight className='mr-2 size-4'/>
                    Me connecter
                </button>
            </div>
            <Link to='/auth/signup' className='px-8 underline underline-offset-2 decoration-primary'>Je n'ai pas de
                    compte</Link>
        </AuthenticationLayout>
)
}
