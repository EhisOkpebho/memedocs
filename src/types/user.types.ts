export type UserDtoTypes = {
    isVisitor: boolean
    email: string
    identifier: string
    firstname: string
    lastname: string
    type: 'patient' | 'doctor' | 'pharmacist'
} & PharmacistUserTypes

export type PharmacistUserTypes = {
    pharmacyId?: string
}
