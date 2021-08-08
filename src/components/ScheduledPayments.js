import React from "react"

class PaymentsReceived extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            amount: 0,
            date: 0
        }
      
     
    }
    onSubmit = async () => {
        const req = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        
    }
    render(){
        return (
            <div>
                <form>
                    {/* <input type="number" onChange={e=>this.setState({ amount: e.target.value })}></input>
                    <input type="radio" id="weekly" onChange={e=>{if(document.getElementById("weekly").value == true){this.setState({ date: e.target.value })}}}>Weekly</input>
                    <input type="radio" id="biweekly" onChange={e=>{}}>biweekly</input>
                    <input type="radio" id="monthly">monthly</input>
                    <input type="submit" onClick={this.onSubmit}></input> */}
                </form>
            </div>
        )
    }
}

export default PaymentsReceived