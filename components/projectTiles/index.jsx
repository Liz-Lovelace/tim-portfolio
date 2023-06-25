import Image from 'next/image'
import styles from './styles.module.css'

export default function ProjectTiles() {
  let projects = [
    {
      name: "ARTO rebranding",
      thumbnailSrc: "/arto-thumbnail.png",
    },
    {
      name: "Ya - studio redesign"
    },
    {
      name: "Business nomads identity"
    },
    {
      name: "INclub branding"
    },
    {
      name: "Nika savo logo"
    },
    {
      name: "T-shirt designs"
    },
    {
      name: "Business cards"
    },
    {
      name: "Presentations"
    },
  ];

  // SizedImage alt="arrow keys placed on jkl;" width="680" height="392" src="/1/good_shortcuts.png">
  let project = projects[0];
  return <div className = {styles.container}>
    <Image
      className = {styles.image}
      src = {project.thumbnailSrc}
      alt = "Thumbnail for {project.name}"
      width = {300}
      height = {300}
    />
  </div>
}
