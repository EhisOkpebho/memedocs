import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
          isVisitor: true
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user =  {
                isVisitor: true
            }
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
