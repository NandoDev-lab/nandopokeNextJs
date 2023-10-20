import Image from "next/image"
import Styles from '../styles/pokedex.module.css'
import Link from "next/link"
import { ST } from "next/dist/shared/lib/utils"

export default function Pokedex({ pokemon }) {
    return (
        <div>
            <div className={Styles.pokedex}>
                <Image src="/images/PokedexPokemonedit.png"
                    width="300"
                    height="400"
                />            
            <div className={Styles.pokemon}>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width="200"
                    height="200"
                    alt={pokemon.name}
                />
                </div>
                </div>

                <div className={Styles.data}>
                <h3>#{pokemon.id} </h3>                
                <h3>{pokemon.name}</h3>
                </div>
                <div className={Styles.button_container}>
                <button className={Styles.pokedetails}><Link legacyBehavior href={`/pokemon/${pokemon.id}`}><a>Detalhes</a></Link></button>
            </div>
        </div>
    )
}