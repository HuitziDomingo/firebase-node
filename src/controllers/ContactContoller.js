import { db } from '../firebase'

export const getContact = async (req, res) => {
    let data = await db.collection('contacts').get()
    let contacts = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    console.log(contacts);

    res.send("obtener datos")
    
}

export const createContact = async (req, res) => {
    let { firstname, lastname, phone, email } = req.body

    await db.collection('contacts').add({
        firstname, lastname, phone, email
    })

    res.send("Contacto guardado")
}

export const updateContact = async (req, res) => {
    let doc = await db.collection('contacts').doc('Z9OJLMTdsPMIMGUe4ieo').get()

    console.log(doc)

    res.send("Contacto actualizado")
}