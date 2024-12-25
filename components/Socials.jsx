import Link from "next/link"
import {FaGithub, FaLinkedin} from "react-icons/fa"
const socials = [
    {
    icon: <FaGithub/>,
    path: "https://github.com/cent-kanayo"
    },
    {
        icon: <FaLinkedin/>,
        path: "https://linkedin.com/in/chukwu-innocent"
    },
]
const Socials = ({containerStyle, iconStyle}) => {
  return (
  <>
  {socials.map((item, index) => {
    return <div key={index} className="flex">
        <Link href={item.path} className={iconStyle}>{item.icon}</Link>
    </div>
  })}
  </>
  )
}

export default Socials