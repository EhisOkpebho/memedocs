import {CircleUser, Save} from "lucide-react";
import FormInput from "../components/FormInput";
import MySpaceLayout from "../layouts/MySpaceLayout";

export default function Profile() {
    return (
        <MySpaceLayout>
            <div className='p-8 w-full flex flex-col gap-y-8 rounded-3xl shadow-sm bg-white'>
                <h3 className='font-bold text-2xl'>
                    <CircleUser className='mb-1 mr-2 size-6 inline'/>
                    Mon profil
                </h3>
                <form className='flex flex-col gap-y-8'>
                    <div className='flex flex-wrap gap-4'>
                        <FormInput label='Identifiant' description='Identifiant'/>
                        <FormInput label='Siret'
                                   description="Système d'identification du répertoire des établissements"/>
                        <FormInput label='Numéro de rue'/>
                        <FormInput label="Complément d'adresse"/>
                        <FormInput label="Code postale"/>
                        <FormInput label="Ville"/>
                    </div>
                    <button
                        className='w-full h-12 rounded-lg bg-pharmacist tracking-wider uppercase text-sm font-medium text-white hover:brightness-95 duration-150'>
                        <Save className='mr-2 mb-1 size-3.5 inline'/>
                        Enregistrer les modifications
                    </button>
                </form>
            </div>
        </MySpaceLayout>
    )
}
