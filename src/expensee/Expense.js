 import React , { useState } from "react";

 let Expense= (props) =>{
    const [amount,setAmount] = useState(props.amount)

    function deleteHandler(){
      setAmount(100)
      console.log(amount  )
      
    }
    return(
      <div>
        <h3>{props.title}</h3>
        <h3>${amount}</h3>
        <h3>{props.location}</h3>
        <button onClick={deleteHandler}>delete</button>
      </div>
    )
}

export default Expense