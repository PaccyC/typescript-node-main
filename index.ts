
import express from 'express'
import remindersRouter from './routers/reminders'
const app= express();


app.use(express.json())
app.get("/",(req,res)=>{
    console.log("Home route")
    res.send("Home route")
}
)

app.use("/reminders",remindersRouter)

app.listen(8000,()=>{
    console.log("Server started...");
    
})  