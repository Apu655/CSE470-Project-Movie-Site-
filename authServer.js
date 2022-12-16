// const generateAccessToken = (user)=>{
//     const username = req.body.username
//     const user = {name:username}
//     const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
//     res.json({accessToken:accessToken})
// }

const generateAccessToken = (user)=>{
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15s"})
}

