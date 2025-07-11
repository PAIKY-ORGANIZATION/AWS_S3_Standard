import { Request, Response } from 'express';
import { listObjectsService } from '../../services/list-objects.js';

export const listAllObjectsController = async(_req: Request, res: Response)=>{
    

    const objectList = await listObjectsService()

    const response: ServerResponse = {
        message: 'Successfully retrieved all objects.',
        success: true,
        data: objectList
    }

    res.send(response)
}