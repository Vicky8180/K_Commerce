
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const _dirname = path.dirname(__filename);
const buildpath = path.join(_dirname, "../frontend/build");
app.use(express.static(buildpath));

app.use(cors({
  origin: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 5000}`,
  methods: ["GET", "POST"],
  allowedHeaders: ["my-custom-header"],
  credentials: true,
}));

const Register = require("./routers/CreateRoute");
const Login = require("./routers/Login");
const UpdateL = require("./routers/Updateroute");

app.use("/api", Register);
app.use("/api", Login);
app.use("/api", UpdateL);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT || 5000}`);
});
