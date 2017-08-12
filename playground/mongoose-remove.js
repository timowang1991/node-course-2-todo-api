const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const { User } = require('../server/models/user');

// Remove everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({ _id: '598edbf5f371642e28cd84dd' }).then((todo) => {
    console.log('findOneAndRemove: ', todo);
});

// Todo.findByIdAndRemove('598edb9df371642e28cd84cc').then((todo) => {
//     console.log(todo);
// });