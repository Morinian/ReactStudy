import '../App.css'

export function Alunos({alunos, search, ...props}){
    
    const filterAlunos = alunos.filter((aluno) =>
        aluno.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <h2>Lista de Aulas</h2>

            {filterAlunos.lengh === 0 ? (
                <p>Nenhum aluno encontrado</p>
            ):(
                <ul>
                    {filterAlunos.map((aluno,index) => (
                        <li key={index}>{aluno}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}