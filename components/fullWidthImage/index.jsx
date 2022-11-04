import Image from 'next/image'
import styles from './styles.module.css'

export default function FullWidthImage({src, alt, title=""}) {
  return <div className = {styles.container}>
    <Image
      className = {styles.image}
      src = {src}
      alt = {alt}
      title = {title}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  </div>
}
