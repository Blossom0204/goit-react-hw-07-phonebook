import { createAsyncThunk } from '@reduxjs/toolkit'
import * as contactsAPI from '../services/contactsapi'

export const fetchContactsList = createAsyncThunk(
  'users/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.getContacts()
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const createContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.addContact(contact)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.deleteContact(id)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
