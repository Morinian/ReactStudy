import './Header.css';

export function Header({setExercicio}){


    return (
        <div>
            <div className='Top'>
                <h3>Senac BCC</h3>
                <div className='Guia'>
                    <button onClick={() => setExercicio(0)}>Limpar eventos</button>
                    <button>Trocar tema</button>
                </div>
            </div>
        </div>
    )
}
