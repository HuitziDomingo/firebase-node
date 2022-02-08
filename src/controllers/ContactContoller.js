import { db } from '../firebase'


export const getContact = async (req, res) => {
    let data = await db.collection('contacts').get()
    let contacts = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    console.log(contacts);

    res.send("obtener datos")
}

export const createContact = (res, req) => {
    let { firstname, lastname, phone, email } = req.body

    console.log(firstname, lastname, phone, email)
    console.log("todo bien")

    res.send("Contacto guardado")
}