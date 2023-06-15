const ToDoListModel = require('./ToDoListModel');

module.exports.getList = async(req, res) => {
    const myList = await ToDoListModel.find();
    res.send(myList)
}

module.exports.saveLists = async(req, res) => {
    const { name } = req.body;
    ToDoListModel.create({ name })
    .then((data) => {console.log('List eded')
    res.send(data)
})
}

module.exports.deleteList = async(req, res) => {
    const {_id} = req.body
    ToDoListModel.findByIdAndDelete(_id)
    .then(() => res.send('DELETED'))
}

module.exports.editList = async(req, res) => {
    const {_id, name} = req.body
    ToDoListModel.findByIdAndDelete(_id, { name })
    .then(() => res.send('Edited'))
}