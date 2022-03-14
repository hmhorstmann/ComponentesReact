// Acessando conteúdo do componente através do CONTEUDO entre as TAGS <Item>CONTEUDO</Item> "porps.children"
const Item = ( {children} ) => {
    return (
        <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
            {children}
        </a>
    )
}

// Acessando conteúdo do componente através de atributos do componente.
// const Item = (props) => {
//     return (
//         <a href="#" className="list-group-item list-group-item-action list-group-item-dark">
//             {props.conteudo}
//         </a>
//     )
// }

export default Item