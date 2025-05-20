export default function Exercicio6({ quantidade, preco}) {

    let subtotal= (quantidade* preco ) ;
    let desconto= (subtotal* 0.1 ) ;
    let valorf= (subtotal* desconto ) ;

    return (<div>
     quantidade de consultas: {quantidade} <br/>
     salario bruto: r$ {salario} <br/>
     desconto inss: r$ { desconto} <br/>
     salario liquido: r$ {salario} <br/>


   
    </div>
    );

}