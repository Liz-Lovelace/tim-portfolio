import Picture from './tim-izhanov.png'
import Image from 'next/image'
import styles from './styles.module.css'

export default function HeaderPicture() {
  return (
    <Image
      src = {Picture}
      alt = "Photo of Tim Izhanov"
      className = {styles.image}
    />
  )
}
