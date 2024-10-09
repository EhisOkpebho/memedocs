import {Blocks, CirclePlus, Filter} from "lucide-react";
import FormInput from "../components/FormInput";
import PharmacistSpaceLayout from "../layouts/PharmacistSpaceLayout";

export default function Commands() {
    return (
        <>
            <PharmacistSpaceLayout>
                <div className='p-8 w-full flex flex-col gap-y-8 rounded-3xl shadow-sm bg-white'>
                    <div className='flex flex-col md:flex-row gap-y-4 justify-between'>
                        <h3 className='font-bold text-2xl'>
                            <Blocks className='mb-1 mr-2 size-6 inline'/>
                            Gestion du stock
                        </h3>
                        <button className='px-4 py-1 max-md:h-10 rounded-md bg-primary text-sm text-white hover:brightness-95 duration-150'>
                            <CirclePlus className='mr-1 size-4 inline' />
                            Ajouter un médicament
                        </button>
                    </div>
                    <FormInput label='Filtrer' placeholder='Nom du produit' icon={Filter} className='h-8'/>
                </div>
            </PharmacistSpaceLayout>
        </>
    )
}
