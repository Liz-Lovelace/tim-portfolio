import NavigationLink from '/components/navigationLink'
import Link from 'next/link'
import bigWideImage from './media/big-wide-image.png'
import cat from './media/cat.png'
import canyon from './media/canyon.png'
import FullWidthImage from '/components/fullWidthImage'

export default function Home() {
  return <>
    <h1> ARTO rebranding </h1>
    <NavigationLink href="process.com">
      Process
    </NavigationLink>
    
    <h2> Задача </h2>
    <p> Задизайнить дизайн для магазина <Link href="https://Arto.com"> Arto </Link> </p>
    <Link href="https://twitter.com/"> Моя инста </Link>
    <p> Сделать то сё и быть молодцом </p>
    <p> оказываем проблему, но не решение. Где место магии? </p>
    <p> Приходим к пониманию: нужно показать ситуацию до Профи и после. Сначала бардак, после — порядок. Сначала текущая </p>

    <FullWidthImage 
      src = {bigWideImage}
      alt = "stock art"
    />

    <FullWidthImage 
      src = {cat}
      alt = "cat"
    />

    <FullWidthImage 
      src = {canyon}
      alt = "canyon"
    />

    <NavigationLink href="process.com">
          Process
        </NavigationLink>
    <NavigationLink href="/" align="left">
      Main page
    </NavigationLink>
  </>
}
