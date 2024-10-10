import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: 'john.doe@gmail.com',
            firstname: 'John',
            lastname: 'DOE',
            identifier: 'John Doe',
            type: 'doctor',
            // type: 'pharmacist',
            pharmacyId: 'd38aec54-ad17-4f28-ba2a-b6d3ec61c8bc'
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = {
                email: 'john.doe@gmail.com',
                firstname: 'John',
                lastname: 'DOE',
                identifier: 'John Doe',
                type: 'doctor',
                // type: 'pharmacist',
                pharmacyId: 'd38aec54-ad17-4f28-ba2a-b6d3ec61c8bc'
            }
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
