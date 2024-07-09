const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express());

mongoose.connect("mongodb+srv://boyamister:s3nSSQfFnCgTtBur@cluster0.bzol0u3.mongodb.net/usernewapp?retryWrites=true&w=majority&appName=Cluster0")

const User = mongoose.model('Users', {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("Email already exists");
  }

  const user = new User({
    name: username,
    email: email,
    password: password
  });
  user.save();
})

app.listen(3001);