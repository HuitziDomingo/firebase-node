import { Router } from 'express'

import * as ContactController from '../controllers/ContactContoller'

const router = Router()

router.get('/get', ContactController.getContact)
router.post('/new-contact', ContactController.createContact)
router.get('/edit-contact', ContactController.updateContact)

export default router