import Expense from "./expensee/Expense";
import Header from "./Header";
let App =() => {
  let arr =[
    {
      title : "burger" ,
      amount: 200,
      location: "mumbai" 
    },
    {
      title : "ticket"  ,
      amount: 1990,
      location: "patna" 
    },
    {
      title : "hotel" ,
      amount: 20000,
      location: "ahmedabad" 
    },
    {
      title : "game" ,
      amount: 2000,
      location: "surat" 
    }
  ]
  return (
    <>
      <div className="App">
        <h1>ved</h1>
        <div>{arr.map((obj) => {
       return <Expense title={obj.title}  amount={obj.amount} location={obj.location}/>
        })}</div>
        <Header />
      </div>
    </>
  );
}

export default App;
