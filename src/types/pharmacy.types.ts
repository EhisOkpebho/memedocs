import {Address} from "./Address";

export type PharmacyDtoTypes = {
    id: string
    name: string
    siret: string
    address: Partial<Address>
    inventory: MedicineInventoryEntryDtoTypes[]
    prescriptions: PrescriptionDtoTypes[]
}

export type MedicinesDtoTypes = {
    id: string
    label: string
}

export type MedicineInventoryEntryDtoTypes = {
    medicine: MedicinesDtoTypes
    quantity: number
}

export type PrescriptionMedicineDtoTypes = {
    medicine: MedicinesDtoTypes
    quantity: number
}

export type PrescriptionDtoTypes = {
    id: string
    medicines: PrescriptionMedicineDtoTypes[]
    patient: string
}
