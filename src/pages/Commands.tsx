import {Filter, ListOrdered} from "lucide-react";
import MySpaceLayout from "../layouts/MySpaceLayout";
import FormInput from "../components/FormInput";

export default function Commands() {
    return (
        <>
            <MySpaceLayout>
                <div className='p-8 w-full flex flex-col gap-y-8 rounded-3xl shadow-sm bg-white'>
                    <h3 className='text-center font-bold text-2xl'>
                        <ListOrdered className='mb-1 mr-2 size-6 inline'/>
                        Liste des commandes <span className='text-base'>({new Date().toLocaleDateString()})</span>
                    </h3>
                    <FormInput label='Filtrer' placeholder='Nom du produit' icon={Filter} className='h-8'/>
                </div>
            </MySpaceLayout>
        </>
    )
}
