const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
let jwtPassword = "password";
const cors = require("cors");
// const fetch = require("node-fetch"); // Added for making HTTP requests
app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello, world!");
  });
  
try{
// MongoDB connection
mongoose.connect("mongodb+srv://hackathonmj641:1029384756@cluster0.bomrqhm.mongodb.net/mydatabase");
}catch(err){
    console.log(err)
}
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String
});

// Function to check if user exists
async function userExists(email) {
  const existingUser = await User.findOne({ email: email });
  return !!existingUser;
}

// Sign up route
app.post('/signUp', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (await userExists(email)) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();
    res.json({ msg: "User successfully created" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", errorMsg: error.message });
  }
});

// Sign in route
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ error: "User not found" });
    }

    // Perform password validation here

    const token = jwt.sign({ email: existingUser.email }, req.body.password);
    res.json({ userSignedIn: true, token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", errorMsg: error.message });
  }
});

// Users route
app.get("/users", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, req.body.password);
    const userEmail = decoded.email;

    if (!(await userExists(userEmail))) {
      return res.status(404).json({ error: "User not found" });
    }

    const userList = await User.find({}, "-password");
    res.json(userList);
  } catch (error) {
    res.status(500).json({ error: "Internal server error", errorMsg: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
