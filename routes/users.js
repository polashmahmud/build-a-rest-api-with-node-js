import express from 'express';

import { getUsers, createUser, showUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', showUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
