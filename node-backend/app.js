const express = require("express")
const bodyParser = require("body-parser")

const placesRoutes = require("./routes/places-routes")
const HttpError = require("./models/http-error")
const userRouters = require("./routes/users-routes")

const app = express()

app.use(bodyParser.json())

app.use("/api/places",placesRoutes)
app.use("/api/users", userRouters)

app.use((req, res, next)=>{
    const error = new HttpError('could not find this route.', 404)
    throw error
})

app.use((error, req, res, next)=>{
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500).json({message: error.message || "An unknown error occurred"})
})

app.listen(5000)