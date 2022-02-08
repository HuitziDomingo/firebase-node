import { db } from '../firebase'

export const getContact = async (req, res) =>{
    let querySnapshot = await db.collection('contacts').get()
    console.log(querySnapshot.docs[0].data())

    res.send("Hola mundo")
}