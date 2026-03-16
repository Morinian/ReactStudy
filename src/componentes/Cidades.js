import { useState } from "react";

export function Cidades(){

    const listaCidades = [
        {nome: 'São Paulo', TempMax: 30, TempMin: 20, Desc: 'Ensolarado'},
        {nome: 'Rio de Janeiro', TempMax: 30, TempMin: 20, Desc: 'Ensolarado'},
        {nome: 'Belo Horizonte', TempMax: 30, TempMin: 20, Desc: 'Ensolarado'},
        {nome: 'Curitiba', TempMax: 30, TempMin: 20, Desc: 'Ensolarado'},
        {nome: 'Porto Alegre', TempMax: 30, TempMin: 20, Desc: 'Ensolarado'},
    ]

    const diaAtual = new Date().toLocaleDateString();
    const [nome, setNome] = useState('');
    const [TempMax, setTempMax] = useState('');
    const [TempMin, setTempMin] = useState('');
    const [Desc, setDesc] = useState('');

    const [listaCidade, setListaCidades] = useState(listaCidades);

    function adicionarCidade(){
        if(nome === '' || TempMax === '' || TempMin === '' || Desc === '') return;
        
        var obj = {
            nome: nome,
            TempMax: TempMax,
            TempMin: TempMin,
            Desc: Desc
        }

        setListaCidades([...listaCidade, obj]);
    }

    return (
        <div>
          <h1>Cidades</h1>
          <h3> O dia é {diaAtual}</h3>
          <input placeholder="Nome Cidade" value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input placeholder="Temp Max" value={TempMax} onChange={(e) => setTempMax(e.target.value)}/>
          <input placeholder="Temp Min" value={TempMin} onChange={(e) => setTempMin(e.target.value)}/>
          <input placeholder="Descrição" value={Desc} onChange={(e) => setDesc(e.target.value)}/>
          <button onClick={adicionarCidade}>Adicionar Cidade</button>
          <ul>
            {listaCidade.map((cidade) => (
                <li>
                    <b>Nome:</b> {cidade.nome} - 
                    <b> Max:</b> {cidade.TempMax} - 
                    <b> Min:</b> {cidade.TempMin} -  
                    <b> Descrição:</b> {cidade.Desc}
                </li>
            ))}
          </ul>
        </div>
    )
}