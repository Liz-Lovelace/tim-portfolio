import styles from './page.module.css'
import HeaderPicture from '/components/headerPicture'
import NavigationLink from '/components/navigationLink'

export default function Home() {
  return (
    <>
      <HeaderPicture />

      <h2> My projects </h2>
      <NavigationLink href="/projects/test-project">
        Test project
      </NavigationLink>
      
      <h2> About me </h2>
      <p> I am young passionate </p>
      <p> Graphic designer from Moscow. </p>
      <p> I will study your business, audience and competitors for achiveing best results. </p>
      <NavigationLink href="https://more.com">
        More
      </NavigationLink>

      <h2> Get in touch </h2>
      todo: make entire horizontal area clickable
    </>
  )
}
