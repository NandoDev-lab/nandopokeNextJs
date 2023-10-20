import Link from 'next/link'
import Image from 'next/image'

import Styles from '../styles/navbar.module.css'

export default function Navbar(){
    return(
        <nav className={Styles.navbar}>
           <div className={Styles.logo}> 
            <Image
            src="/images/pokeball.png"
            width="30"
            height="30" 
            />
            <h1>Poke<span>NextJS</span></h1>
           </div>
           <ul className={Styles.link_items}>
            <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
            <li><Link legacyBehavior href="/about"><a>Sobre</a></Link></li>
            <li><Link legacyBehavior href="/contact"><a>Contato</a></Link></li>
           </ul>
        </nav>
    )
}