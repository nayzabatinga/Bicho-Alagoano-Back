import { Request, Response } from "express";

import { firestore } from '../firebase';
import { CollectionEnum } from "../enums/collection.enum";

class PetsController{
    register(request: Request, response: Response){
        const { body } = request

        firestore
            .collection(CollectionEnum.PETS)
            .add(body)
            .then(() => response.sendStatus(201))
            .catch(err => response.status(400).send(err))
    }

    list(request: Request, response: Response){
        firestore
            .collection(CollectionEnum.PETS)
            .get()
            .then(snapshot => {
                const docs = snapshot.docChanges();
                const result = docs.map(item => {{
                    return {
                        id: item.doc.ref.id,
                        ...item.doc.data()
                    }
                }})
                response.status(200).send(result)
            })
            .catch(err => response.status(400).send(err))
    }

    delete(request: Request, response: Response){
        const { id } = request.query;

        firestore
            .collection(CollectionEnum.PETS).doc(id as string)
            .delete()
            .then(() => response.sendStatus(204))
            .catch(err => response.status(404).send(err))
    }
}

export default new PetsController()