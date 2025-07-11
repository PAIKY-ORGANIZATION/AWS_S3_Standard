import { Request, Response } from 'express';
import { deleteAllObjectsService } from '../../services/delete-objects.js';

export const deleteObjectsController = async(_req: Request, res: Response)=>{
    const result = await deleteAllObjectsService()

    const response: ServerResponse = {
        message: result ? 'Successfully deleted all objects': 'No objects to delete',
        success: true,
        data: result
    }

    res.send(response)

}