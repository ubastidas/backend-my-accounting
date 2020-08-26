import Router from 'express-promise-router';

import { hello } from "../controllers/test.controller";

const router = Router();

router.get('/', hello);

export default router;