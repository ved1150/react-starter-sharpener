import React from "react";
import "./Expenseform.css"
import { useState } from "react";

const  Expenseform = () =>{
    const [amount,setAmount] = useState("")
    const [title,setTitle] = useState("")
    const [location,setLocation] = useState("")

    
    function updateTitel(event) {
        setTitle(event.target.value)
    }
    function updateAmount(event) {
        setAmount(event.target.value)
    }
    function updateLocation(event) {
        setLocation(event.target.value)
    }

    function allSubmit (event){
        event.preventDefault()
        const obj = {
            title:title,
            amount:amount,
            location:location
        }
        console.log(obj)
    }

    return (
        <form onSubmit={allSubmit}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={updateTitel} />
                </div>

                <div className="new-expense__control">
                    <label for="amount">Amount:</label>
                    <input type="number" name="amount" id="amount" onChange={updateAmount}/>
                </div>

                <div className="new-expense__control">
                    <label for="date">date:</label>
                    <input type="date" name="date" min="2020-01-01" max="2022-12-310"  id="date" onChange={updateLocation} />
                </div>
                <div className="new-expense__actions"></div>
                <button type="submit" >Add Expense</button>

            </div>
        </form>
    )
    
}
export default Expenseform