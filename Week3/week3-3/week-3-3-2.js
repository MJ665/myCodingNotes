const express = require("express");
const app = express();
const zod = require("zod");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtPassword = "passwordThisIsSoMuchSeceret";

app.use(express.json());

mongoose.connect("mongodb+srv://hackathonmj641:1029384756@cluster0.bomrqhm.mongodb.net/myDatabase111");

const User = mongoose.model("Users1111", {
    email: String,
    name: String,
    password: String
});

async function userExists(email) {
    const existingUser = await User.findOne({ email: email });
    return !!existingUser;
}

app.post("/signUp", async (req, res) => {
    const inputUser = req.body.email;
    const inputPass = req.body.password;
    const inputName = req.body.name;

    if (!await userExists(inputUser)) {
        try {
            const token = jwt.sign({ email: inputUser, name: inputName, password: inputPass }, jwtPassword);
            const user = new User({ email: inputUser, name: inputName, password: inputPass });
            await user.save();
            res.json({ message: "User created successfully", token: token });
        } catch (err) {
            res.status(500).json({ error: "Error while signing up the user", message: err.message });
        }
    } else {
        res.status(400).send("User already exists");
    }
});


app.get("/users", async (req, res) => {
  const inputToken = req.headers.authorization; // Corrected line
  try {
      const verifiedDecoded = await jwt.verify(inputToken, jwtPassword); // Corrected line
      const ALL_USER_data = await User.find({}); // You need to define ALL_USERS or fetch user data from your database
      res.json({
          msg: "Token verified",
          decodedToken: verifiedDecoded,
          data: ALL_USER_data
      });
  } catch (err) {
      res.status(401).json({ error: "Error while token verification", msg: err.message }); // Changed status code to 401 for unauthorized access
  }
});



app.listen(3000, () => {
    console.log("The app is listening on port 3000");
});
