const express = require('express');
const bd=require('body-parser');
const cors=require('cors');

const App = express();
const Port = 5000;


App.use(cors());
App.use(bd.urlencoded({
    urlencoded:false
}))

App.use(bd.json());


App.get('/', (req, res) => {
    res.send("Hello World")
})


App.post('/signup', (req, res) => {
    console.log(req.body);
})

App.listen(Port, () => {
    console.log("Server is running...");
})





