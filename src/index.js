const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});

const jwt = require('jsonwebtoken')

const myFunc = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisisgrehgerww', {  expiresIn: '1 day'})
    console.log(token)

    const data = jwt.verify(token, 'thisisgrehgerww')
    console.log(data)
}

myFunc();