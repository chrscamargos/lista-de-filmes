import FilmeCard from './components/FilmeCard'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      titulo: 'O Iluminado',
      genero: 'Terror',
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
    }

  ]);
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
    <main className='container'>

      <header className='cabecalho'>
        <h1>Lista de filmes</h1>
        <p>Controle de filmes assistidos</p>
      </header>

      <section className='resumo'>

        <div className='resumo-card'>
          <span>Total</span>
          <strong>{filmes.length}</strong>
        </div>

        <div className='resumo-card-assistido'>
          <span>Assistidos</span>
          <strong>{totalAssistidos}</strong>
        </div>

        <div className='resumo-card-naoAssistido'>
          <span>Não assistidos</span>
          <strong>{totalNaoAssistidos}</strong>
        </div>

        <section className='lista-filmes'>
          {filmes.map((filme) => (
            <FilmeCard
              key={filme.id}
              titulo={filme.titulo}
              genero={filme.genero}
              ano={filme.ano}
              assistido={filme.assistido}
              alternarAssistido={() => alternarAssistido(filme.id)}
            />
          ))}
        </section>
      </section>
    </main>
  );
}