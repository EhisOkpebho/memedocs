import AuthenticationLayout from "../layouts/AuthenticationLayout";
import {Link, useNavigate} from "react-router-dom";
import FormInput from "../components/FormInput";
import {ArrowRight} from "lucide-react";

export default function Login() {
    const router = useNavigate()

    return (
        <AuthenticationLayout title='Connexion' position='left'>
            <div className='px-8 w-full overflow-y-auto flex flex-col gap-y-8'>
                <FormInput label='Adresse email' type='email' className='h-14 text-base' fill/>
                <FormInput label='Mot de passe' type='password' className='h-14 text-base' fill/>
            </div>
            <div className='px-8 w-full'>
                <button
                    onClick={() => router('/')}
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
