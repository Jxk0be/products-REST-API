const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productRoute = require("./routes/product.route")
require('dotenv').config();

app.use(express.json())
app.use("/api/products", productRoute)

mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@backenddb.mibfpma.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`)
.then(() => {
    console.log("Connected to the DB...")
    const PORT = 3000
    app.listen(PORT, "0.0.0.0", () => {
        console.log("Server is running on port 3000")
    })
})
.catch(() => {
    console.log("Connection Failed...")
})

app.get('/', (req, res) => {
    res.send("This is my first ever successful REST API... hopefully")
})