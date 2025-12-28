import express from "express"

const router = express.Router()


router.get("/signup",(req, res)=>{
    return res.status(200).json({msg:"you are successfully signedup"})
})
router.get('/login',(req,res)=>{
    return res.status(200).json({msg:"Successfully login"})
})
router.get("/logout",(req, res)=>{
    return res.status(200).json({msg:"Logout successfully"})
})

export default router;