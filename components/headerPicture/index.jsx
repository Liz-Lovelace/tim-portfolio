import Picture from './tim-izhanov.png'
import Image from 'next/image'
import styles from './styles.module.css'

export default function HeaderPicture() {
  return (
    <Image
      src = {Picture}
      object-fit = "cover"
      alt = "Photo of Tim Izhanov"
      title = "insert joke here"
    />
  )
}
