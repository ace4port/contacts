import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from './api'

const initialState = {
  isLoading: false,
  success: false,
  page: 'main',
  contactsList: [],
  contactOne: {},
  contactEdit: {},
  contactView: {},
}

export const getAll = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const res = await api.get()
    return res
  } catch (error) {
    console.log(error)
  }
})

export const getOne = createAsyncThunk('contacts/fetchOne', async (id) => {
  try {
    const res = await api.getOne(id)
    return res
  } catch (error) {
    console.log(error)
  }
})

export const create = createAsyncThunk('contacts/create', async (data) => {
  console.log('Create action', data)
  try {
    const res = await api.create(data)
    return res
  } catch (error) {
    console.log(error)
  }
})

export const edit = createAsyncThunk('contacts/editOne', async (data) => {
  // console.log('From edit', contactE)
  try {
    const res = api.edit(data)
    return res
  } catch (error) {
    console.log(error)
  }
})

export const remove = createAsyncThunk('contacts/delete', async (id) => {
  try {
    const res = await api.remove(id)
    return res
  } catch (error) {
    console.log(error)
  }
})

export const verify = createAsyncThunk('contacts/verify', async (formdata) => {
  console.log('Veriy create', formdata)
  return formdata
})

export const verifyEdit = createAsyncThunk('contacts/verify/edit', async (formdata) => {
  console.log('Verify Edit', formdata)
  return formdata
})

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    clear(state) {
      state.isLoading = false
      state.contactsList = []
      state.success = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOne.pending, (state) => {
        state.isLoading = true
        state.success = false
      })

      .addCase(getAll.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.contactsList = action.payload.data
      })
      .addCase(getOne.fulfilled, (state, action) => {
        state.isLoading = false
        state.success = true
        state.contactOne = action.payload.data
        state.contactView = action.payload.data
      })

      .addCase(getAll.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(getOne.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(verify.fulfilled, (state, action) => {
        // console.log('Create Verfiy fulfilled', action.payload)
        state.contactOne = action.payload
        state.contactView = action.payload
      })
      .addCase(verifyEdit.fulfilled, (state, action) => {
        state.contactEdit = action.payload
        state.contactView = action.payload
      })
  },
})

export const { clear } = contactSlice.actions

export const page = (state) => state.contact.page

export const loading = (state) => state.contact.isLoading
export const success = (state) => state.contact.success

export const list = (state) => state.contact.contactsList
export const contact = (state) => state.contact.contactOne
export const contactEdits = (state) => state.contact.contactEdit
export const contactView = (state) => state.contact.contactView

export default contactSlice.reducer
