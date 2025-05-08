import express from "express";
import movieRoutes from "./routes/movies.routes";


const app = express();

app.get('/',(req,res)=>{
    res.json({msg:"Hello World"});
});

app.use('/movies',movieRoutes);
app.listen(8000,()=>{
    console.log(`Server is running at port 8000`);
    
});  