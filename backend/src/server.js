import express from "express"

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.route.js'
import path from "path"
const __dirname = path.resolve()

app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes)


// make ready for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    // here we are connecting frontend with backend
    app.get("*",(req, res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })

}

app.listen(PORT,()=>{
    console.log(`server is running successfully http://localhost:${PORT}`)
})