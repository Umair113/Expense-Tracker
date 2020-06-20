import React,{useContext,useState} from "react";
import {TransactionContext} from "./transContext";

function Child() {

   
    let {transactions,addTransaction}=useContext(TransactionContext);
    let [newDesc,setDesc]=useState("");
    let [newAmount,setAmount]=useState(0);


    const handleAdditoin=(event)=>{
        event.preventDefault();
        addTransaction({
            amount:newAmount,
            desc:newDesc
        })

    }

    return (
        <div className="container">

            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your Balance <br /> $700</h3>

            <div className="expense-container">
                <h3>INCOME <br /> $700</h3>
                <h3>EXPENSE <br /> $7</h3>
            </div>
            <h3>History</h3>
            <hr />




            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>

                    )

                })}
            </ul>

            <h3>Add new Transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAdditoin}>

                <label>Text</label><br />
                <input type="text" placeholder="Enter text..." onChange={(ev)=>setDesc(ev.target.value)} required />
                <br />
                <br />
                <label>Amount<br />(negative-expense, positive-income)</label><br />
                <input type="text" placeholder="Enter Amount..." onChange={(ev)=>setAmount(ev.target.value)} required />
                <br /><br />
                <input type="submit" value="Add Transaction" />

            </form>

        </div>
    );
}

export default Child;