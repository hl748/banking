const express = require("express")
const router = express.Router()
// const { signUp, login } = require("../controllers/accountAuth.js")
const { checkingAccount,  addCheckingAccount, transferCheckingAccount, transferToSaving, a} = require("../controllers/checking.js")
const { savingAccount, addSavingAccount, transferSavingAccount, transferToChecking } = require("../controllers/saving.js")
const { transfer } = require("../controllers/transfer")
const { payment, getItem } = require("../controllers/payment.js")
// const isAuth = require("s../middleware/is-auth.js")


// router.post("/signup", signUp)
// router.post("/a",a)
// router.post("/login", login)
router.post("/checking", checkingAccount)
router.post("/addAmount", addCheckingAccount)
router.post("/transfer", transferCheckingAccount)
router.post("/transferAccounts", transferToSaving)
// router.post("/receive",transfer)
router.post("/buyItem",payment)
router.post("/getItem",getItem)

// router.post("/saving", savingAccount)
// router.post("/addSavingAmount", addSavingAccount)
// router.post("/transferSaving", transferSavingAccount)
// router.post("/transferSavingAccounts", transferToChecking)



module.exports = router
    
// app.post("/signup", signUp)
// app.post("/login",login)
// app.post("/checking",checkingAccount)
// }