
const express = require('express')

const app = express()

const cors = require('cors')

app.use(cors());


const port = process.env.PORT || 5000;
const categories =require('./categories.json');
app.get('/news-categories',(req,res) => {

    
    res.send(categories);

})

app.get('/',(req,res) =>  {

    res.send('news runnig')
}) 


app.listen(port, () => {

    console.log('news',port)
})