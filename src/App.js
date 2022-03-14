import Item from './components/Item'
import Card from './components/Card'

const App = () => {
  return (
    <>
    <h1>Minha primeira aplicação com React - DIO</h1>
    <ul>

      {/* Acessando conteúdo do componente através do CONTEUDO entre as TAGS <Item>CONTEUDO</Item> "porps.children" */}
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>

      {/* Acessando conteúdo do componente através de atributos do componente.
      <Item conteudo="Item 1"/>
      <Item conteudo="Item 2"/>
      <Item conteudo="Item 3"/> */}
      
    </ul>
    <Card />
    </>
  )
}

export default App;
