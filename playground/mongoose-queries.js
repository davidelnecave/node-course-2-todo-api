const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5b34e022a8bf8319b01963b1';
var userId = '5b32774c9123ca04b8f9bbbd';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

Todo.findById(userId).then((user) => {
	if(!user) {
		return console.log('user not found.');
	}
	console.log('User by id', user);
}).catch((e) => console.log(e));