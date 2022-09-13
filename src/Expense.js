export default function Expense(props){

    return(
      <div>
        <h3>{props.title}</h3>
        <h3>${props.amount}</h3>
        <h3>{props.location}</h3>
      </div>
    )
}