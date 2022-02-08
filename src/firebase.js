import { config as dotenv } from 'dotenv'
import { initializeApp, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

dotenv()

initializeApp({
    credentials: applicationDefault()
})

const db = getFirestore()

module.exports = {
    db
}