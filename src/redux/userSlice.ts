import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            firstname: 'Ehis',
            lastname: 'OKPEBHO',
            identifier: 'Ehis OKPEBHO'
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = {
                firstname: 'Ehis',
                lastname: 'OKPEBHO',
                identifier: 'Ehis OKPEBHO'
            }
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
