const express = require('express')
const cors = require('cors');
const app=express()
const port = 3001;
app.use(express.json())



app.use(cors({origin:'http://localhost:5173/'}))


const marcaRoutes = require('./routes/marcaRoutes')

app.use('/marca',marcaRoutes)

app.listen(port,()=>{

    console.log('rodando na porta:',{port})
})