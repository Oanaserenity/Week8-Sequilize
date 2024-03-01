require ("dotenv").config()
const express = require("express")

const port = process.env.PORT || 5001

const app = express()

app.use(express.json())

app.get("/health",(request,response) =>{  
    response.send("api is healthy")
})

const syncTables = () =>{}

app.listen(port,()=>{
    syncTables ()
    console.log("server is listening")
})
