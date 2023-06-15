const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ToDoListRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = 4000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGOODB_LINK)
.then(() => console.log(`WORK TO MONGO`))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`WORK ON PORT ${PORT}`)
})

// 
// ClusterToDoList
// valakovaleva
// ZdQWMzvrVqBAHkTY

// mongodb+srv://valakovaleva:<password>@clustertodolist.vu0rieh.mongodb.net/?retryWrites=true&w=majority