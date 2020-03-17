const app = require('express')();

app.set('view engine' , 'ejs');
app.get('/' , (req , res)=>{
    res.render('index.ejs');
})

app.listen(3000 , ()=>{
    console.log("Server start working");
})