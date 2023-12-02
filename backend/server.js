const express = require('express')
const cors = require('cors');
const app=express()
const port = 3001;
app.use(express.json())



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


const marcaRoutes = require('./routes/marcaRoutes')

app.use('/marca',marcaRoutes)

app.listen(port,()=>{

    console.log('rodando na porta:',{port})
})