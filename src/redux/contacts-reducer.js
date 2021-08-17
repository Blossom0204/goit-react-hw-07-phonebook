import { combineReducers } from 'redux'

import { createReducer } from '@reduxjs/toolkit'
import {
  fetchContactsList,
  createContact,
  deleteContact,
} from './contacts-operations'
import { changeFilter } from './contacts-actions'

const contacts = createReducer([], {
  [fetchContactsList.fulfilled]: (_, action) => action.payload,
  [createContact.fulfilled]: (state, { payload }) => {
    return [...state, payload]
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

const isLoading = createReducer(false, {
  [fetchContactsList.pending]: () => true,
  [fetchContactsList.fulfilled]: () => false,
  [fetchContactsList.rejected]: () => false,
})

const error = createReducer(null, {
  [fetchContactsList.rejected]: (_, action) => action.payload,
  [fetchContactsList.pending]: () => null,
  [createContact.rejected]: (_, action) => action.payload,
  [createContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
})

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
})
