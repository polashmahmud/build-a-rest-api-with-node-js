import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    users.push({...req.body, 'id': uuidv4()});
    res.send('User create successfully');
}

export const showUser = (req, res) => {
    const {id} = req.params;
    const user = users.find(user => user.id === id);
    if(user) {
        res.send(user);
    }
    res.status(404).send('User not found');
}

export const updateUser = (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    const {name, email, age} = req.body;

    if(user) {
        if(name) user.name = name;
        if(email) user.email = email;
        if(age) user.age = age;
        
        res.send('User updated successfully');
    }
    res.status(404).send('User not found');
}

export const deleteUser = (req, res) => {
    const findUser = users.find(user => user.id === req.params.id);
    if(findUser) {
        users = users.find(user => user.id !== req.params.id);
        res.send('User deleted successfully');
    }
    res.status(404).send('User not found');
}