const express = require('express')
const app = express()
const port = 3000

//몽구스에 접속하는 코드
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ljj3347:dlwndwo2@boilerplate.sbrrhwd.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

