import Image from 'next/image'
import Styles from '../../styles/pokemondetails.module.css'

export const getStaticPaths = async () => {
    const maxPokemon = 250
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemon}`)
    const data = await res.json()

    //params
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return {
        props: { pokemon: data },
    }

}
export default function PokemonData({ pokemon }) {
    return (
        <div className={Styles.pokemon_container}>
            <h1 className={Styles.title}>{pokemon.name}</h1>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="300"
                height="300"
                alt={pokemon.name}
            />
            <div>
                <h3>Número:</h3>
                <p>{pokemon.id}</p>
                </div>

                <div>
                    <h3>Tipo:</h3>
                    <div className={Styles.types_container}>
                        {pokemon.types.map((item, index) => (
                            <span key={index} className={`${Styles.type} ${Styles['type_' + item.type.name]}`}>
                                {item.type.name}</span>
                        ))}
                    </div>
                </div>
                <div className={Styles.data_container}>
                    <div className={Styles.data_height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                    </div>
                    
                <div className={Styles.data_weight}>
                    <div>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                    </div>
                    </div>
                </div>
            </div>
    

    )
}