import {CircleAlert, CircleUser, Save} from "lucide-react";
import FormInput from "../components/FormInput";
import PharmacistSpaceLayout from "../layouts/PharmacistSpaceLayout";
import {useGetMe} from "../utils/utils";
import DoctorSpaceLayout from "../layouts/DoctorSpaceLayout";
import {useEffect, useState} from "react";
import {PharmacyDtoTypes} from "../types/pharmacy.types";

function Profile() {
    const me = useGetMe()

    const [pharmacy, setPharmacy] = useState<Partial<PharmacyDtoTypes>>()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + `/pharmacies/${me.pharmacyId}`)
            .then((res) => res.ok ? res.json() : null)
            .then(setPharmacy)
    }, [])

    function handleUpdatePharmacy() {
        fetch(process.env.REACT_APP_API_URL + `/pharmacies/${me.pharmacyId}`, {
                method: 'PATCH' ,
                headers: {     "Content-Type": "application/json"   },
                body: JSON.stringify(pharmacy)
        }).then((res) => res.json())
    }

    return (
        <div className='p-8 w-full flex flex-col gap-y-8 rounded-3xl shadow-sm bg-white'>
            {
                (me.pharmacyId && !pharmacy) && (
                    <div className='p-4 w-full  flex items-center justify-center rounded-md border border-red-500/30 bg-red-500/10 text-red-500'>
                        <CircleAlert className='mr-2 size-4' />
                        <span className='text-center'>Impossible de récupérer les données</span>
                    </div>
                )
            }
                <h3 className='font-bold text-2xl'>
                    <CircleUser className='mb-1 mr-2 size-6 inline'/>
                    Mon profil
                </h3>
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-y-8'>
                    <div className='flex flex-col md:flex-row md:flex-wrap gap-4'>
                        <FormInput label='Identifiant'  placeholder='Aucune donnée' value={pharmacy ? pharmacy.name : me.firstname + ' ' + me.lastname.toUpperCase()} onChange={(e) => setPharmacy({ ...pharmacy, name: e.target.value })} contentEditable={!!pharmacy} disabled={!pharmacy} />
                        <FormInput label='Email'  placeholder='Aucune donnée' value={me.email} />
                        <FormInput label='N° Siret'
                                   placeholder='Aucune donnée'
                                   value={pharmacy && pharmacy.siret}
                                   onChange={(e) => setPharmacy({ ...pharmacy, siret: e.target.value })}
                                   description="Système d'identification du répertoire des établissements"
                                   contentEditable={!!pharmacy} disabled={!pharmacy}
                        />
                        <FormInput label='Numéro de rue' placeholder='Aucune donnée' value={pharmacy && pharmacy.address?.street} onChange={(e) => setPharmacy({ ...pharmacy, address: { ...pharmacy?.address, street: e.target.value } })} contentEditable={me.pharmacyId && !!pharmacy} disabled={me.pharmacyId && !pharmacy} />
                        <FormInput label="Complément d'adresse"  placeholder='Aucune donnée' value={pharmacy && pharmacy.address?.complement} onChange={(e) => setPharmacy({ ...pharmacy, address: { ...pharmacy?.address, complement: e.target.value } })} contentEditable={!!pharmacy} disabled={me.pharmacyId &&  !pharmacy}  />
                        <FormInput label="Code postale"  placeholder='Aucune donnée' value={pharmacy  && pharmacy.address?.postalCode} pattern='[0-9]'  onChange={(e) => setPharmacy({ ...pharmacy, address: { ...pharmacy?.address, postalCode: e.target.valueAsNumber } })} contentEditable={me.pharmacyId && !!pharmacy} disabled={me.pharmacyId && !pharmacy} />
                        <FormInput label="Ville"  placeholder='Aucune donnée' value={pharmacy && pharmacy.address?.city} onChange={(e) => setPharmacy({ ...pharmacy, address: { ...pharmacy?.address, city: e.target.value } })} contentEditable={me.pharmacyId && !!pharmacy} disabled={me.pharmacyId && !pharmacy}  />
                    </div>
                    <button
                        onClick={handleUpdatePharmacy}
                        className='w-full h-12 rounded-lg bg-pharmacist tracking-wider uppercase text-xs sm:text-sm font-medium text-white hover:brightness-95 duration-150'>
                        <Save className='mr-2 mb-1 size-3.5 inline'/>
                        Enregistrer les modifications
                    </button>
                </form>
        </div>
    )
}

export default function () {
    const user = useGetMe()

    if (user.type === 'pharmacist') {
        return  (
            <PharmacistSpaceLayout>
                <Profile />
            </PharmacistSpaceLayout>
        )
    }

    if (user.type === 'doctor') {
        return (
            <DoctorSpaceLayout>
                <Profile />
            </DoctorSpaceLayout>
        )
    }

    return null
}
