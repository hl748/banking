import { BrowserRouter, Route, Switch } from "react-router-dom"
import React from "react"
// import Header from "./components/header/header.js"
// import Footer from "./components/footer.js"
import Checkings from "./components/Checkings.js"
import Savings from "./components/Savings.js"
import ItemsPurchased from "./components/ItemsPurchased.js"
import ScheduledPayments from "./components/ScheduledPayments.js"
import SignUp from "./components/SignUp"
import Dboard from "./components/Dboard.js"

function App() {
  return (
    <BrowserRouter>{/* <Header /> */}
      <h1>Banking Simulation</h1>
      <Switch>
        <Route path="/signuppage" component={SignUp}></Route>
        <Route path="/dboard" component={Dboard}></Route>
        {/* <Route path="/itemspurchased" component={ItemsPurchased}></Route> */}
        {/* <Route path="/checkings" component={Checkings}></Route>
        <Route path="/savings" component={Savings}></Route>
        <Route path="/loginpage" component={LoginPage}></Route> */}
        {/* <Route path="/schedulepayments" component={ScheduledPayments}></Route> */}
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
