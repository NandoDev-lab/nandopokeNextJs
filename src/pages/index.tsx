
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Styles from '../styles/home.module.css'
import Pokedex from '../components/card.js'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const maxPokemon = 151 
  const maxlimit = '?limit='
  const nome ="pokemon"
  const api = 'https://pokeapi.co/api/v2/'

  const res = await fetch(`${api}/${nome}/${maxlimit}+${maxPokemon}`)
  const data = await res.json()

  data.results.forEach((item: any, index: any) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }:any) {
  return (
    <>
      <div className={Styles.title_container}>
        <h1>Pokedex</h1>
        <Image src="/images/pokedexfechada.jpg" width="50" height="50" alt='Pokedex' />
      </div>
      <div className={Styles.pokemon_container}>

        {pokemons.map((pokemon: any) => (<Pokedex key={pokemon.id} pokemon={pokemon}/>))}

      </div>
    </>
  )
}
