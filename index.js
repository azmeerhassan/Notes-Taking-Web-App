const express = require ('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    fs.readdir('./files', (err, files)=>{
        res.render("index", {files: files})
        
    })
    
})

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000 ...");
})

