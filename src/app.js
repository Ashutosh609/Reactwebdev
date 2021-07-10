const dotenv = require('dotenv');

const express = require('express');
const cookieParser = require('cookie-parser');     

const app = express();
app.use(cookieParser());

dotenv.config({ path: '../config.env' });  

require('./db/conn');
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(require('./Route/route'));

if (process.env.NODE_ENV == "production"){
    app.use(express.static("mernfrontend/build"));
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'mernfrontend',"build","index.html"));
    })
};

app.listen(port, () => {
    console.log(port)
})