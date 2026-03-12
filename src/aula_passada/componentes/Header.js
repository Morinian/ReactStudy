import { useState } from 'react'
import '../App.css'

import logo from '../assets/senac-logo.png'


function BotaoAlerta({textDisplay, curso}){
    
    const mensagem = textDisplay + ' - ' + curso.nome
    return(
        <>
        <button onClick={()=> alert(mensagem)}>{textDisplay}</button>
        </>
    )
}

export function Header({value, ...props}){
    //const curso = "TSI"
    const curso = {
        nome:"BCC", 
        detalhes: "Bacharelado em Ciência da Computação"
    }

    const handleInputChange = (e) => {
        value(e.target.value)
    }

    return (
        <div>
                <img src={logo} />
                <h1> Oi {curso.nome}...</h1> 
                <h2>Boa noite alunos de {curso.detalhes}</h2>
                <input value={props.searched} onChange={handleInputChange}/>

            {/*
            <button onClick={()=> alert(curso.nome + " " + curso.detalhes)}>Botao!</button>
            <BotaoAlerta textDisplay="Botao de alerta de curso" curso={curso} /> */}
        </div>
    )
}
