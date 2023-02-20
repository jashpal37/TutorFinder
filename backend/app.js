const express = require('express');
const cors = require("cors");
const app = express();
require('./db/conn');
app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));
app.get('/', (req, res)=> {
    res.send("Hello World");
})

app.listen(8000,()=>{
    console.log("Listening on port 8000...");
});
