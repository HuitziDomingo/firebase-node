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

export const editContact = async (req, res) => {
    // console.log(req.params.id)//Ver en express un parametro en la url
    let doc = await db.collection('contacts').doc(req.params.id).get()

    console.log({ id: doc.id, ...doc.data() })

    res.send("Contacto actualizado")
}

export const deleteContact = async (req, res) => {
    await db.collection('contacts').doc(req.params.id).delete()

    res.send("Contacto eliminado")
}

export const updateContact = async (req, res) => {
    let { id } = req.params
    await db.collection('contacts').doc(id).update(req.body)

    return res.send("Contacto actualizado")
}