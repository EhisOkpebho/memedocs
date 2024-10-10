import {BookCopy, CirclePlus, Filter, Search} from "lucide-react";
import FormInput from "../components/FormInput";
import DoctorSpaceLayout from "../layouts/DoctorSpaceLayout";
import {useState} from "react";

export default function Orders() {
    const [socialSecurityNumber, setSocialSecurityNumber] = useState<string>()

    return (
        <>
            <DoctorSpaceLayout>
                <div className='p-8 w-full flex flex-col gap-y-8 rounded-3xl shadow-sm bg-white'>
                    <h3 className='max-sm:text-center font-bold text-2xl'>
                        <BookCopy className='mb-1 mr-2 size-6 inline'/>
                        Liste des ordonances <span className='text-base'>({new Date().toLocaleDateString()})</span>
                    </h3>
                    <div className='flex space-x-2 items-end'>
                        <FormInput label='Numéro de sécurité sociale du patient' placeholder='X XX XX XX XXX XXX XX'
                                   icon={Filter} onChange={(e) => setSocialSecurityNumber(e.target.value)} />
                        <button
                            className='px-4 py-1 h-10 rounded-md bg-primary tracking-wider uppercase text-xs sm:text-sm font-medium text-white hover:brightness-95 duration-150'>
                            <Search className='md:mr-2 mb-1 size-3.5 inline' />
                            <span className='hidden md:inline'>Rechercher</span>
                        </button>
                    </div>
                    <div>
                        <h3 className='text-sm'>
                            <span className='mr-1 font-semibold'>(0)</span>
                            Résultats pour la recherche du numéro :
                            <span className='uppercase font-semibold text-blue-400'> {socialSecurityNumber ?? 'X XX XX XX XXX XXX XX'}</span>
                        </h3>
                    </div>
                </div>
            </DoctorSpaceLayout>
        </>
    )
}
