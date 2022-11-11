import Link from 'next/link'
import styles from './styles.module.css'

export default function NavigationLink({children, href="/please-specify-href", align="right"}){
  let alignClass = align == "left" ? styles.alignLeft : styles.alignRight
  // TODO: make the entire horizontal area clickable
  return <Link
    href={href}
    className={[
      styles.navigationLink,
      alignClass,
    ].join(" ")}
  > 
    {children}
  </Link>
}