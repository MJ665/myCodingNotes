const express = require("express");
const app = express();
const zod = require("zod");
const mongoose = require("mongoose");

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
            const user = new User({ email: inputUser, name: inputName, password: inputPass });
            await user.save();
            res.send("User created successfully");
        } catch (err) {
            res.status(500).json({ error: "Error while signing up the user", message: err.message });
        }
    } else {
        res.status(400).send("User already exists");
    }
});

app.listen(3000, () => {
    console.log("The app is listening on port 3000");
});
