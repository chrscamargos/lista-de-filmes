import './FilmeCard.css'

export default function FilmeCard({ titulo, genero, ano, assistido, alternarAssistido }) {
    return (
        <article className={`filme-card ${assistido ? 'card-assistido' : 'card-nao-assistido'}`}>
            <div>
                <h1>{titulo}</h1>
                <p>{genero}</p>
                <p>{ano}</p>
            </div>

            <div className="status">
                <p>
                    Status{''}
                    <strong>{assistido ? 'Assistido' : 'Não assistido'}</strong>
                </p>

                <button onClick={alternarAssistido}>
                    {assistido ? 'Marcar não assistido' : 'Marcar assistido'}
                </button>
            </div>
        </article>
    )
}