import { useRef, useState } from "react"

import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"


const MealItemForm = props => {

    const inputRef = useRef()

    const [amountIsValid, setAmountIsValid] = useState(true)

    const addTocCart = e => {
        e.preventDefault()

        const enteredAmount = inputRef.current.value
        const enteredAmountNumber = +enteredAmount


        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false)
            return
        }

        props.onSubmit( enteredAmountNumber )
    }

    return (
        <form className={classes.form} onSubmit={addTocCart}>
            <Input 
                label="Amount" 
                ref={inputRef}
                input={{
                    id: "amout",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter a validate value (1 - 5)</p>}
        </form>
    )
}


export default MealItemForm