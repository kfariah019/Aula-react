import { useState } from "react";
export default function Exemplo1() {
 const[numero1, setNumero1] =useState(0);
 const[numero2, setNumero2] =useState(0);
 const[resultado, setResultado] =useState(0);
 function somar()
 {


 }
 function limpar()
 {


 }
 
  return (
    <div>
      <h1>Exemplo 1</h1>
      <div className="conteudo"> 
        <h3>Exemplo de uso useState</h3>
        
        <p>o objetivo sera somar dois numeros e exibir o resultado na tela</p>
    <form>
    <p>
        Digite o primeiro numero <br/>
        <input type="text"/>
    </p>
    
    <p>
    Digite o segundo numero <br/>
    <input type="text" />
    
    </p>
    
    <p>
    <input type="button" value="Calcular" />
    
    </p>
    <p>
                 <a href="/">Voltar para Home</a>
             </p>
    </form>
    </div>
  
    </div>
  );
}
