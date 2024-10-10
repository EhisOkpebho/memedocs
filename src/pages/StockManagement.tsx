import {Blocks, CirclePlus, Filter, Search} from "lucide-react";
import FormInput from "../components/FormInput";
import PharmacistSpaceLayout from "../layouts/PharmacistSpaceLayout";
import {useGetMe} from "../utils/utils";
import {useEffect, useRef, useState} from "react";
import {MedicineInventoryEntryDtoTypes} from "../types/pharmacy.types";

export default function Commands() {
    const me = useGetMe()

    const addToStockInputRef = useRef<HTMLInputElement>(null)
    const [label, setLabel] = useState<string>()
    const [inventory, setInventory] = useState<MedicineInventoryEntryDtoTypes[]>([])
    const [filter, setFilter] = useState<string>('')

    useEffect(() => updateInventory, [])

    async function getInventory() {
        return (await (await fetch(process.env.REACT_APP_API_URL + `/pharmacies/${me.pharmacyId}`)).json()).inventory
    }

    function updateInventory() {
        getInventory().then(setInventory)
    }

    function getFilteredInventory() {
        return inventory.filter((e) => e.medicine.label.toLowerCase().startsWith(filter?.toLowerCase() ?? ''))
    }

    function handleAddMedicineToStock() {
        fetch(process.env.REACT_APP_API_URL + `/pharmacies/${me.pharmacyId}/inventory`, {
            method: 'POST',
            headers: {     "Content-Type": "application/json"   },
            body: JSON.stringify({ label })
        }).then((res) => {
            if (res.ok && addToStockInputRef.current) {
                addToStockInputRef.current.value = ''
                addToStockInputRef.current.textContent = ''
                updateInventory()
            }
        })
    }

    return (
        <>
            <PharmacistSpaceLayout>
                <div className='p-8 w-full flex flex-col gap-y-8 rounded-3xl shadow-sm bg-white'>
                    <div className='flex flex-col md:flex-row gap-y-4 justify-between'>
                        <h3 className='font-bold text-2xl'>
                            <Blocks className='mb-1 mr-2 size-6 inline'/>
                            Gestion du stock
                        </h3>
                        <div></div>
                    </div>
                    <div className='flex space-x-2 items-end'>
                        <FormInput inputRef={addToStockInputRef} label='Nom du médicamentt' placeholder='Doliprane 500mg'
                                   icon={CirclePlus} onChange={(e) => setLabel(e.target.value)} />
                        <button
                            onClick={handleAddMedicineToStock}
                            className='px-4 py-1 h-10 rounded-md bg-primary tracking-wider uppercase text-xs sm:text-sm font-medium text-white hover:brightness-95 duration-150'>
                            <CirclePlus className='md:mr-2 mb-1 size-3.5 inline'/>
                            <span className='hidden md:inline'>Ajouter au stock</span>
                        </button>
                    </div>
                    <FormInput label='Filtrer' placeholder='Nom du produit' icon={Filter} onChange={(e) => setFilter(e.target.value)} className='h-8'/>
                    {
                        getFilteredInventory().length > 0 && (
                            <table className="table-auto w-full">
                                <thead>
                                <tr>
                                    <th className="h-12 px-4 py-2">Nom du produit</th>
                                    <th className="h-12 px-4 py-2">Quantité</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    getFilteredInventory()
                                        .map((e, index) => (
                                            <tr key={index}>
                                                <td className="h-12 px-4 py-2 border">{e.medicine.label}</td>
                                                <td className="h-12 px-4 py-2 border">{e.quantity}</td>
                                            </tr>
                                        ))
                                }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </PharmacistSpaceLayout>
        </>
    )
}
