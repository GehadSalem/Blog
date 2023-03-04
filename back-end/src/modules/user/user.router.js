import {Router} from 'express'
import auth from '../../middleware/auth.js';
import validation from '../../middleware/validation.js';

import * as userController from  './controller/user.js'
import userSchema from './user.validation.js';
const router = Router();

router.get("/:id" , auth, userController.profile)
router.put("/:id" , auth,  userController.updateUser)
router.delete("/:id" ,auth , userController.deleteUser)

export default  router