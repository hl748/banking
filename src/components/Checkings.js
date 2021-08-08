import React from "react"
import "./Checking.css"

class Checkings extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            addAmount: 0,
            transferAmount: 0
        }
    }

    async componentDidMount(){
        var username = localStorage.getItem("username")
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ username })
        }
        // if (document.cookie == "username=" + this.state.username)
        const response = await fetch("http://localhost:4000/checking",req)
        console.log(req.body)
        console.log(document.cookie)
        const result = await response.json()
        console.log(result)
        const amount = result[0].amount
        // document.getElementById("amount")
        document.getElementById("checking-amount").innerText = amount
        console.log("special console: " + amount)

    }
  
    
    addAmount = async (e) => {
        e.preventDefault()
        var username = localStorage.getItem("username")
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                state: this.state,
                username,
                amount: document.getElementById("checking-amount").childNodes[0].nodeValue
            })
        }
        // if (document.cookie == "username=" + this.state.username)
        console.log(req)
        const response = await fetch("http://localhost:4000/addAmount",req);
        const result = await response.json()
        
    }

    transfer = async (e) => {
        e.preventDefault()
        var username = localStorage.getItem("username")
        console.log(username)
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                state: this.state,
            username,
            amount: document.getElementById("checking-amount").childNodes[0].nodeValue
            })
        }
        // if (document.cookie == "username=" + this.state.username)
        console.log(req)
        const response = await fetch("http://localhost:4000/transfer",req);
        const result = await response.json()
        // console.log(response)
        // console.log(result)
        
    }
    transferSavingAccounts = async (e) => {
        e.preventDefault()
        var username = localStorage.getItem("username")
        const req = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                state: this.state,
                username,
                amount: document.getElementById("checking-amount").childNodes[0].nodeValue
            })
        }
        const response = await fetch("http://localhost:4000/transferAccounts",req);
        const result = await response.json()
    }
    render(){
        return (
            <div id="container">
                <h1>Checking Account</h1>
                <h2>Amount: </h2>
                <h2 id="checking-amount"></h2>
               
                <h2>Add Money: </h2>
                <div>
                    <form>
                        <input type="number" onChange={e => this.setState({ addAmount: e.target.value })} placeholder="Amount to Send"></input><br/>
                        <input type="submit" onClick={this.addAmount} value="Add Money"></input>
                    </form>
                </div>
                <h2>transfer to Saving</h2>
                    <form>
                        
                        
                        
                       
                        <input type="number" placeholder="Amount to Send" onChange={e=>this.setState({ transferAmount: e.target.value})}></input><br/>
                        <input type="submit" onClick={this.transferSavingAccounts} value="Send Money"></input>
                    </form>
                    
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
        )
    }
}

export default Checkings;