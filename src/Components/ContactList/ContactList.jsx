import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchContactsList,
  deleteContact,
} from '../../redux/contacts-operations'
import { getVisibleContacts } from '../../redux/contacts-selectors'
import {
  ContactsList,
  ContactListItem,
  ContactListText,
  BtnDel,
} from './ContactList.styles'

export default function ContactList() {
  const dispatch = useDispatch()
  const contacts = useSelector(getVisibleContacts)

  const onDelete = (id) => dispatch(deleteContact(id))

  useEffect(() => dispatch(fetchContactsList()), [dispatch])

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>
            {name}:&nbsp;{number}
          </ContactListText>
          <BtnDel onClick={() => onDelete(id)}>Delete</BtnDel>
        </ContactListItem>
      ))}
    </ContactsList>
  )
}
