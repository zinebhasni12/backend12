const express = require("express");
const mongoose = require("mongoose");
const TodoModel = require("./Models/Todo");
const UserModel = require("./Models/User");

const app = express();
const port = 7500;

// mongoose.connect("mongodb://localhost:27017/todo-app");

const dbConnect = require("./db/dbConnect");
dbConnect()

// Middleware to parse incoming JSON data
app.use(express.json());

app.post("/addTask", (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/addUser", (req, res) => {
    const { firstNam, lastName, email, DOB } = req.body;

    UserModel.create({
        firstName: firstNam,
        lastName: lastName,
        email: email,
        DOB: DOB
    })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});


app.get("/getAllUsers",(req,res)=>{
      UserModel.find()
      .then(users => res.json(users))
      .catch(err => console.log(err))
})

app.delete("/deleteUser/:email",(req,res)=>{
    const email = req.params.email
    UserModel.deleteOne({email:email})
    .then(result => res.json(result))
    .catch(err=>console.log(err))
})

app.put("/updateUser/:email",(req,res)=>{
    const email = req.params.email
    const {firstName,lastName,DOB} = req.body
    UserModel.updateOne({email:email},{firstName,lastName,DOB})
    .then(result => res.json(result))
    .catch(err=>console.log(err))
})
app.delete("/deleteTask/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.deleteOne({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});
app.put("/updateTask/:id", (req, res) => {
    const id = req.params.id;
    const updatedTask = req.body.task;
    TodoModel.updateOne({ _id: id }, { task: updatedTask })
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
});
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});