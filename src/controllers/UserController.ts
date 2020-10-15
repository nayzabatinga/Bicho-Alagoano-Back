import { Request, Response } from "express";

import { auth, firestore } from '../firebase';
import { CollectionEnum } from "../enums/collection.enum";

class UserController {
    register(request: Request, response: Response) {
        const { email, password, role } = request.body
        auth
            .createUser({ email, password })
            .then((data: any) => {
                const { uid } = data
                firestore
                    .collection(CollectionEnum.USERS)
                    .doc(uid).set({ email, role })
                    .then(() => response.sendStatus(201))
                    .catch(err => response.status(400).send(err.message))
                    
            })
            .catch(err => response.status(400).send(err))
    }
    
    role(request: Request, response: Response){
        const { id } = request.query
        firestore
            .collection(CollectionEnum.USERS)
            .doc(id as string)
            .get()
            .then(snapshot => {
                const data: any  = snapshot.data()
                const role = data.role
                response.status(200).json({role: role})
            })
            .catch(err => response.status(400).send(err.message))
    }
}

export default new UserController()