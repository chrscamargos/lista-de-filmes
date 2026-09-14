import FilmeCard from './components/FilmeCard'
import './App.css'
import { useState } from 'react'

export default function App(){
  const[filmes, setFilmes] = useState ([
    {
      id: 1,
      titulo: 'O Iluminado',
      genero: 'terror',
      ano: '1980',
      assistido: true
    },
    {
      id: 2,
      titulo: 'Vingadores',
      genero: 'Ação',
      ano: '2009',
      assistido: true
    },
    {
      id: 3,
      titulo: 'Homem Aranha',
      genero: 'Ação',
      ano: '2003',
      assistido: true
    },
    {
      id: 4,
      titulo: 'Doutor Sono',
      genero: 'Terror',
      ano: '2017',
      assistido: true
    },

    function alternarAssistido(id) {
      const filmesAtualizados = filmes.map((filme) => {
        if (filme.id === id) {
          return {
            ...filme, assistido: !filme.assistido
          }
        }
        return filme
      });
      setFilmes(filmesAtualizados);
    }

    const totalAssistidos = filmes.filter((filme) => filme.assistido).length;
    const totalNaoAssistidos = filmes.filter((filme) => !filme.assistido).length;

    return (
      <main>
      </main>
    );
  ])
}