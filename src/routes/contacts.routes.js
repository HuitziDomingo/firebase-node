import { Router } from 'express'

import * as ContactController from '../controllers/ContactContoller'

const router = Router()

router.get('/', ContactController.getContact)
router.post('/new-contact', ContactController.createContact)

export default router