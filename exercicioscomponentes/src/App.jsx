import Exemplo1 from "./componentes/exemplo1"
import Exercicio1 from "./componentes/exercicio1"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio6 from "./componentes/exercicio6"
import Exercicio8 from "../../exercicio8/src/exercicio8"
export default function App() {

  return (
    <div>

      <h1> Exercicios de Componentes</h1>
      <Exemplo1 numero1={10} numero2={5} />
      <Exemplo1 numero1={50} numero2={45.98} />

      <Exercicio1 fah={100} />

      <hr />
      <h3> Chamada para o Exercio2</h3>
      <Exercicio2 peso="80" altura="1.80" />
      <Exercicio2 peso="60" altura="1.60" />

      <hr />

      <h3> Chamada para o Exercio 8</h3>
      <Exercicio8 peso="80" altura="1.80" />
    </div>

  )
}