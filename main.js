const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res)=>{
   console.log('yes')
   console.log(req.header('hello'))
   res.send('your header:' + req.header('hello'))
})

app.listen(3030, ()=>{
   console.log('server run at 3030')
})
