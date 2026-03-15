import {Header} from './componentes/Header/Header.js'
import {Footer} from './componentes/footer.js'
import {Calculadora} from './componentes/Calculadora.js'
import './App.css';
import { useState } from 'react';

function App() {

  const [exercicio, setExercicio] = useState(0);

  return (
    <div className="App">
      <Header setExercicio={setExercicio}/>
       <div className='Area'>
           <div className='Lista'>
              <button onClick={() => setExercicio(1)}>Exercicio 1 </button>
              <button onClick={() => setExercicio(2)}>Exercicio 2 </button>
              <button onClick={() => setExercicio(3)}>Exercicio 3 </button>
           </div>
            <div className='Exercicio'>
              {exercicio === 1 ? <Calculadora/> : null}
              {exercicio === 2 ? <Calculadora/> : null}
              {exercicio === 3 ? <Calculadora/> : null}
            </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
