require('dotenv').config()
const express = require("express")
const jwt = require ("jsonwebtoken")
const cors = require("cors")


const app =  express()
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)

app.use(express.json())

app.listen(5000,()=>{
    console.log("listening to port 3000")
})


app.get("/",authenticateToken, (req,res)=>{
    res.json(posts.filter(post=>post.username === req.user.name))
})

app.post("/login",(req,res)=>{
    // Authenticate User

    const {username,email} = req.body
    const user = {name:username,email:email}
    // const password = req.body.password

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})

})

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if (token==null) return res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}