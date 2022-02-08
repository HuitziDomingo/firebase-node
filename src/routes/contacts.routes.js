import { Router } from 'express'

import * as ContactController from '../controllers/ContactContoller'

const router = Router()

router.get('/', ContactController.getContact)

export default router