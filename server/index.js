const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;
const db = require("./db")
app.get('/', (req, res) => {
  res.send('Welcome to My Express App!');
});


const Register = require("./routers/CreateRoute")
const Login= require("./routers/Login")
const UpdateL= require("./routers/Updateroute")


app.use("/api", Register)

app.use("/api", Login)

app.use("/api", UpdateL)





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
