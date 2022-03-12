const express = require("express");
const app = express();
const port = 90;










app.get("/", (req, res)=>{
    console.log("User joined")
    
});









function printport(){
    console.log("Listening on Port "+ port);

}
app.listen(port, printport);