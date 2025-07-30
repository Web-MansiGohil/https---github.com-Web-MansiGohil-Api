import express from 'express';

import { contect, deleteContectId, getAllCOntect, getContectId, getContectUserId, updateContectId } from '../controllers/contect.js';
import { isAuth } from '../Middleware/Auth.js';

const router = express.Router();

// Contect 
// @api des : new contect
// @api method : post
// @api endpoint : /api/contect/new 

router.post("/new", isAuth, contect);

// get all Contect 
// @api des : all contect
// @api method : get
// @api endpoint : /api/contect/
router.get("/", getAllCOntect);

// get special id Contect 
// @api des : id contect
// @api method : get
// @api endpoint : /api/contect/:id
router.get("/:id", getContectId);

// Update contect by id
// @api des : update id contect
// @api method : put
// @api endpoint : /api/contect/:id
router.put("/:id", isAuth, updateContectId);

// Delete contect by id
// @api des : delete id contect
// @api method : delete
// @api endpoint : /api/contect/:id
router.delete("/:id", isAuth, deleteContectId);

// contect by user id
// @api des : user id contect
// @api method : get
// @api endpoint : /api/contect/user/:id
router.get("/user/:id", isAuth, getContectUserId);


export default router;

