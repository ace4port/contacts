import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { sign_in } from './api'

const initialState = { isLoading: false, success: false, page: 'main' }

export const login = createAsyncThunk('auth/login', async ({ username, password }, { rejectWithValue }) => {
  try {
    // const res = await sign_in({ username, password })
    console.log('Make api call')
    // return res
  } catch (error) {
    return rejectWithValue(error)
  }
})

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    logout(state) {
      state.isLoading = false
      state.success = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false
        state.success = true
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const { logout } = contactSlice.actions

export const success = (state) => state.contact.success
export const page = (state) => state.contact.page
export const loading = (state) => state.contact.isLoading

export default contactSlice.reducer
