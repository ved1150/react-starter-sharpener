// import React from "react";


const  Expenseform = () =>{

    function submit(){
    let a =document.getElementById("title").value
    console.log(a)
    let b =document.getElementById("amount").value
    console.log(b)
    let c =document.getElementById("location").value
    console.log(c)
    }


    return (
        <div>
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" />
        <label for="amount">Amount:</label>
        <input type="number" name="amount" id="amount"/>
        <label for="location">location:</label>
        <input type="map" name="location" id="location"/>
        <button onClick={submit}>submit</button>
        </div>
    )
    
}
export default Expenseform