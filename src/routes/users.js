import Router from  "express-promise-router";

import { 
        createUser, 
        getUsers, 
        getUser,
        updateUser,
        deleteUser
    } from '../controllers/users.controller';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;