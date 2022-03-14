import { useState } from 'react'
import Button from '../Button'

const Card = () => {

    const [valor, setValor] = useState(0)

    const Adicionar = () => {
        setValor(valor + 1)
    }

    const Remover = () => {
        setValor(
            (valor > 0) ? valor - 1 : 0
            )
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card: Contador
            </div>
            <div className="card-body">
                <Button 
                type="button" 
                className="btn btn-success"
                onClick={Adicionar}>
                    Adicionar
                </Button>

                <Button 
                type="button" 
                className="btn btn-danger"
                onClick={Remover}>
                    Remover
                </Button>
                {/* <button 
                type="button" 
                className="btn btn-danger"
                onClick={Remover}
                >
                    Remover
                </button> */}
                <p className="contagem">{valor}</p>
            </div>
        </div>
    )
}

export default Card