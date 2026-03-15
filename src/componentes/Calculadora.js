import './Header/Header.css';
import { useState } from 'react';

export function Calculadora(){

    const [resultado, setResultado] = useState(Number(0))
    const [valor1, setvalor1] = useState(Number(0))
    const [valor2, setvalor2] = useState(Number(0))

    function Calcular(operacao){
        if (operacao === "+"){
            setResultado(valor1 + valor2)
        }else if (operacao === "-"){
            setResultado(valor1 - valor2)
        }else if (operacao === "*"){
            setResultado(valor1 * valor2)
        }else if (operacao === "/"){
            setResultado(valor1 / valor2)
        }else if (operacao === "raiz"){
            setResultado(Math.sqrt(valor1))
        }else if (operacao === "expo"){
            setResultado(Math.pow(valor1, valor2))
        }else if (operacao === "limp"){
            setResultado(Number(0))
            setvalor1(Number(0))
            setvalor2(Number(0))
        }else if (operacao === "zer"){
            setResultado(Number(0))
        }
    }

     return (
        <div>
            <h1>Calculadora</h1>
                <input type="number" value={valor1} onChange={(e) => setvalor1(Number(e.target.value))}></input> 
                <input type="number" value={valor2} onChange={(e) => setvalor2(Number(e.target.value))}></input>
                <h3>Resultado: {resultado}</h3>
            <div className='Botoes'>
                <button onClick={() => Calcular("+")}>+</button>
                <button onClick={() => Calcular("-")}>-</button>
                <button onClick={() => Calcular("*")}>*</button>
                <button onClick={() => Calcular("/")}>/</button>
            </div>
             <div className='Botoes'>
                <button onClick={() => Calcular("raiz")}>Raiz Quadrada</button>
                <button onClick={() => Calcular("expo")}>Exponenciação</button>
                <button onClick={() => Calcular("limp")}>limpar</button>
                <button onClick={() => Calcular("zer")}>Zerar</button>
            </div>
        </div>
     )
}