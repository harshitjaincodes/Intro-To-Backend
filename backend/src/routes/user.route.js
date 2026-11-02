import { Router } from 'express';
import { loginUser, logoutuser, registerUser, deleteAccount } from '../controllers/user.controller.js';

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutuser);
router.route("/delete-account").delete(deleteAccount);


export default router; 