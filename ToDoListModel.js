const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('ToDoList', toDoListSchema);