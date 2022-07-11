import { useContext } from "react"

import CartContext from "../../store/cart-context"
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props =>{

    const price = `$ ${props.price.toFixed(2)}`

    const addItemCtx = useContext(CartContext)

    const onSubmit = (amount)=>{
        console.log(typeof amount)
        addItemCtx.addItem({
            id: props.id,
            price: props.price,
            name: props.name,
            description: props.description,
            amount,
        })
    }

    return  (
        <li className={classes.meal}>
            <div> 
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onSubmit={onSubmit}/>
            </div>
        </li>
    )
}

export default MealItem