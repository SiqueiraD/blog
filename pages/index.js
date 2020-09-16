import React from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const a1 = await fetch('link-graphcms')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema');
    })
    //.then((respostaEmObjeto) => respostaEmObjeto.p_entries);

  return {
    props: {
      a1,
    },
  };
}

export default function Home(props) {
  const { a1 } = props;

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            <Link href={`/pokemon/${pokemon.entry_number}`}>
              <a>
                {pokemon.pokemon_species.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}