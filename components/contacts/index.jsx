import Link from 'next/link'
import styles from './styles.module.css'

function ContactEntry(title, tag, href) {
  return <a
    href = {href}
    className = {styles.contactEntry}
    key = {title+tag+href}
  > 
    <span>{title}</span> <span>{tag}</span>
  </a>
}

const contacts = [
  ['Mail', 'tim@izhanov.ru', 'https://gmail.com'],
  ['Telegram', '@iTimPng', 'https://gmail.com'],
  ['WhatsApp', '+7 926 437 09 16', 'https://gmail.com'],
  ['Instagram', '@iTimPng', 'https://gmail.com'],
]



export default function Contacts(){
  return <div>
    {
      contacts.map(contact => ContactEntry(...contact))
    }
  </div>
}