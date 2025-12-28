import express from "express"

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.route.js'

app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(PORT,()=>{
    console.log(`server is running successfully http://localhost:${PORT}`)
})