const express = require('express')
const app = express()
const port = 3000

app.get('/INICIO', (req,res) =>
res.send ('<h1 style= "color: blue;"> BIENVENIDO A LA PAGINA DE INICIO </h1>') )

app.get('/SOBRE', (req,res) =>
res.send ('<h1 style= "color: blue;"> SOBRE NOSOTROS </h1>') )

app.get('/PRODUCTOS', (req,res) =>
res.send ('<h1 style= "color: blue;"> PRODUCTOS </h1>') )

app.get('/CONTACTOS', (req,res) =>
res.send ('<h1 style= "color: blue;"> CONTACTOS </h1>') )



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
