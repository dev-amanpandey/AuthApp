const express= require("express")
const app= express();

require('dotenv').config();
const PORT= process.env.PORT|| 4000;
 
app.use(express.json());
 
const userRoutes= require("./routes/user");
app.use("/api/v1",userRoutes);

app.listen(PORT,()=>{
    console.log('server is running at ${PORT}');
});
require("./config/database").connect();
