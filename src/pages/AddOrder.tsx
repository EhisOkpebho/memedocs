import {BookCopy, BookPlus, CirclePlus, Filter, Save, Search} from "lucide-react";
import FormInput from "../components/FormInput";
import DoctorSpaceLayout from "../layouts/DoctorSpaceLayout";
import {useEffect, useRef} from "react";

export default function AddOrder() {
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log(fileInputRef)
    }, [fileInputRef]);

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
                                   icon={Filter}/>
                        <button
                            className='px-4 py-1 h-10 rounded-md bg-primary tracking-wider uppercase text-xs sm:text-sm font-medium text-white hover:brightness-95 duration-150'>
                            <Search className='md:mr-2 mb-1 size-3.5 inline'/>
                            <span className='hidden md:inline'>Rechercher</span>
                        </button>
                    </div>
                    <div className='flex space-x-2 items-end'>
                        <FormInput inputRef={fileInputRef} type='file' accept='application/pdf' label='Sélectionner un fichier PDF' placeholder='Aucun fichier sélectionné'
                                   icon={BookPlus}/>
                        <button
                            onClick={() => fileInputRef.current && fileInputRef.current.click()}
                            className='px-4 py-1 h-10 rounded-md bg-gray-200 tracking-wider uppercase text-xs sm:text-sm font-medium text-gray-700 hover:brightness-95 duration-150'>
                            <BookPlus className='md:mr-2 mb-1 size-3.5 inline'/>
                            <span className='hidden md:inline'>Parcourir</span>
                        </button>
                    </div>
                    <button
                        className='w-full h-12 rounded-lg bg-pharmacist tracking-wider uppercase text-xs sm:text-sm font-medium text-white hover:brightness-95 duration-150'>
                        <CirclePlus className='mr-2 mb-1 size-4 inline'/>
                        Ajouter l'ordonnance
                    </button>
                </div>
            </DoctorSpaceLayout>
        </>
    )
}
