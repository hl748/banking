import React from "react"

class ItemsPurchased extends React.Component {
    constructor(props){
        super(props)

    }

    async componentDidMount() {
        var username = localStorage.getItem("username")
    const req = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username
        })
    }
    console.log(req)
    const response = await fetch("http://localhost:4000/getItem",req);
    console.log(response)
    const result = await response.json()
    console.log(result)
    }

    render(){
        return (
            <div>
               {/* <h1>{this.state.name}</h1>
               <h2>{this.state.price}</h2> */}
            </div>
        )
    }
}

export default ItemsPurchased;