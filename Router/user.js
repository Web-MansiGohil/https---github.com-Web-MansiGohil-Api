    import { register, login } from "../controllers/user.js"
import express from 'express';

export const router = express.Router();

//@api dsc :- user register
// @api method :- post
//@api endPoint :- /api/user/register
router.post("/register", register);

//@api dsc :- user register
// @api method :- post
//@api endPoint :- /api/user/register
router.post("/login", login);

export default router;

