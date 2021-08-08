import React from "react"
import Checkings from "./Checkings"
import Savings from "./Savings"
import PaymentsReceived from "./ScheduledPayments.js"
import Items from "./Items.js"
import ItemsPurchased from "./ItemsPurchased"

class Dboard extends React.Component {
    constructor(props){
        super(props)

       
    }
    render(){
        return (
            <>
            <h1>Welcome, {localStorage.getItem("username")}</h1>
               <Checkings />
                <Items /> 
               <Savings />
               <ItemsPurchased />
               
               <PaymentsReceived />
               <div id="container">
              
                <div>
                <h2>Send Money</h2>
                    <form>
                        
                        
                        <input type="text" placeholder="User ID" onChange={e=>this.setState({ id: e.target.value})} placeholder="User Id" ></input><br/>
                       
                        <input type="number" placeholder="Amount to Send" onChange={e=>this.setState({ transferAmount: e.target.value})}></input><br/>
                        <input type="submit" onClick={this.transfer} value="Send Money"></input>
                    </form>
                </div>
                <p></p>
                <p></p>
                <p></p>
            </div> 
            </>
        )
    }
}

export default Dboard