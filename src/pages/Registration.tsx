import AuthenticationLayout from "../layouts/AuthenticationLayout";
import {Link} from "react-router-dom";
import FormInput from "../components/FormInput";
import {ArrowRight, Cross, Stethoscope} from "lucide-react";
import {useState} from "react";

export default function Registration() {
    const [type, setType] = useState<'doctor' | 'pharmacist'>()

    return (
        <AuthenticationLayout title='Inscription' position='right'>
            {
                type ? (
                    <>
                        <div className='px-8 pb-2 w-full overflow-y-auto flex flex-col gap-y-8'>
                            <FormInput label='Nom' className='h-14 text-base' fill/>
                            <FormInput label='Prénom' className='h-14 text-base' fill/>
                            <FormInput label='Adresse email' type='email' className='h-14 text-base' fill/>
                            <FormInput label='Mot de passe' type='password' className='h-14 text-base' fill/>
                            { type === 'pharmacist' && <FormInput label='N° SIRET' className='h-14 text-base' fill/> }
                            <FormInput label='Numéro de rue' className='h-14 text-base' fill/>
                            <FormInput label="Complément d'adresse" className='h-14 text-base' fill/>
                            <FormInput label='Code postale' className='h-14 text-base' fill/>
                            <FormInput label='Ville' className='h-14 text-base' fill/>
                        </div>
                        <div className='px-8 w-full'>
                            <button
                                className='w-full h-14 min-h-14 flex items-center justify-center rounded-lg bg-primary tracking-wide uppercase font-medium text-white hover:brightness-95 duration-150'>
                                <ArrowRight className='mr-2 size-4'/>
                                M'inscrire
                            </button>
                        </div>
                        <Link to='/auth/login' className='px-8 underline underline-offset-2 decoration-primary'>J'ai
                            déjà un
                            compte</Link>
                    </>
                ) : (
                    <div className='my-auto px-8 w-full flex flex-col space-y-4'>
                        <button
                            onClick={() => setType('doctor')}
                            className='pr-4 w-full h-14 min-h-14 flex items-center justify-between rounded-lg bg-doctor tracking-wide uppercase font-medium text-white hover:brightness-95 duration-150'>
                            <div className='px-4 h-full flex items-center justify-center border-r border-black/10'>
                                <ArrowRight className='size-5'/>
                            </div>
                            Je suis médecin
                            <Stethoscope className='size-5' />
                        </button>
                        <button
                            onClick={() => setType('pharmacist')}
                            className='pr-4 w-full h-14 min-h-14 flex items-center justify-between rounded-lg bg-pharmacist tracking-wide uppercase font-medium text-white hover:brightness-95 duration-150'>
                            <div className='px-4 h-full flex items-center justify-center border-r border-black/10'>
                                <ArrowRight className='size-5'/>
                            </div>
                            Je suis pharmacien
                            <Cross className='size-5' />
                        </button>
                    </div>
                )
            }
        </AuthenticationLayout>
    )
}
