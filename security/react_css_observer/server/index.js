const express = require('express');
const app = express();

app.get('/:key',(req,res)=>{
    process.stdout.write(req.params.key);
    return res.sendStatus(200);
})

app.listen(9000,()=>{
    console.log("listening 9000");
})