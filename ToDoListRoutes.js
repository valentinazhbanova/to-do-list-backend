const { Router } = require('express');
const { getList, saveLists, deleteList, editList } = require('./ToDoListController');

const router = Router();

router.get('/', getList);
router.post('/saveToDoList', saveLists);
router.post('/editToDoList', editList);
router.post('/deleteToDoList', deleteList);



module.exports = router;