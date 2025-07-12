import { Request, Response } from 'express';
import { deleteAllObjectsService } from '../../services/delete-objects.js';
import { Unauthorized } from 'custom-exceptions-express';

export const deleteObjectsController = async(req: Request, res: Response)=>{

    const passCode = req.body.passCode

    if(!passCode) throw new Unauthorized('"passCode" is required in the body')

    if(passCode !== process.env.DELETE_OBJECTS_PASSCODE) throw new Unauthorized('Passcode is incorrect')

    const result = await deleteAllObjectsService()

    const response: ServerResponse = {
        message: result ? 'Successfully deleted all objects': 'No objects to delete',
        success: true,
        data: result
    }

    res.send(response)

}