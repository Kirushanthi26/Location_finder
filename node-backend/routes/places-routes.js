const express = require("express")

const router = express.Router()

router.get('/', (req, res, next)=>{
    console.log("it's working - places")
    res.json({message:"get req is working - places"})
})

module.exports = router;