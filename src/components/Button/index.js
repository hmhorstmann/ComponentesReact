const Button = ( {children, className, onClick} ) => {
    return (
        <button 
            type="button" 
            className={className} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

// Sem usar destructuring
// const Button = (props) => {
//     return (
//         <button 
//             type="button" 
//             className={props.className} 
//             onClick={props.onClick}
//         >
//             {props.children}
//         </button>
//     )
// }

export default Button