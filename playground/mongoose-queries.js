const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = '974731fc9f43bf1f92ddf59';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userId = '5969e92d9913672e06ee3305';
User.findById(userId).then((user) => {
    if (!user) {
        return console.log('user not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));