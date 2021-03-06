import React from "react"
import "./Checking.css"

class Items extends React.Component{
constructor(props){
super(props)

this.state = {
    name: "",
    price: ""
}
}

buyItem = async (e) => {
    e.preventDefault()
    var username = localStorage.getItem("username")
    const req = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            state: this.state
        })

    }
    const response = await fetch("http://localhost:4000/buyItem",req);
    console.log(response)
    const result = await response.json()
    console.log(result)
}
render(){
    return(
<div id="container">
    <h1>Buy Items</h1>
<form>
    <label>Buy items</label>
    <input type="text" placeholder="Item" onChange={e=>this.setState({ name: e.target.value })}></input>
    <input type="number" placeholder="Price" onChange={e=>this.setState({ price: e.target.value })}></input>
    <input type="submit" onClick={this.buyItem}></input>
</form>
</div>)
}
}

export default Items;