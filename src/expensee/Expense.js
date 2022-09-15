 let Expense= (props) =>{
    let deleteHandler =() => {
      console.log('click')
    }
    return(
      <div>
        <h3>{props.title}</h3>
        <h3>${props.amount}</h3>
        <h3>{props.location}</h3>
        <button onClick={deleteHandler}>delete</button>
      </div>
    )
}

export default Expense