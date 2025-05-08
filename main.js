const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({msg:"Hello World"});
});
//GET METHOD
app.get('/movies',()=>{

});

//POST METHOD
app.post('/movies',()=>{

});

//UPDATE METHOD
app.put('/movies/:id',()=>{

});

//DELETE METHOD
app.delete('/movies/:id',()=>{

});

app.listen(8000,()=>{
    console.log(`Server is running at port 8000`);
    
});  