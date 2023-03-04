import {Router} from 'express'
import auth from '../../middleware/auth.js';
import validation from '../../middleware/validation.js';
import { login, signup } from './auth.validation.js';
import * as authController from  './controller/auth.js'
const router = Router();


router.post('/signup', validation(signup) , authController.signup)
router.post('/login', validation(login) , authController.login)
router.get('/logout', auth , authController.logout)

export default  router