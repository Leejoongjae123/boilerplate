const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser')
const {User} = require('./models/User') //Schema가 들어있는 Model을 갖온다.

const config =require('./config/key')

app.use(bodyParser.urlencoded({extended:true})) //middleware로 bodyParser을 넣어주고 인코딩 정보를 넣는다.
app.use(bodyParser.json())

//몽구스에 접속하는 코드
const mongoose=require('mongoose')
mongoose.connect(config.mongoURI)
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!Nice!')
})

app.post('/register',(req,res)=>{
  //회원 가입에 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user=new User(req.body)
  user.save((err,userInfo)=>{
    if(err) return res.json({success:false,err})
    return res.status(200).json({
      success:true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} nice to meet you`)
})

