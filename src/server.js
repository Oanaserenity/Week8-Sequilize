require ("dotenv").config()
const express = require("express")

const port = process.env.PORT || 5001

const Book = require ("./books/model")
const bookRouter = require ("./books/routes")

const app = express()

app.use(bookRouter)

app.use(express.json())

app.get("/health",(request,response) =>{  
    response.send("api is healthy")
})

const syncTables = () =>{
    Book.sync()
}

app.listen(port,()=>{
    syncTables ()
    console.log("server is listening")
})
