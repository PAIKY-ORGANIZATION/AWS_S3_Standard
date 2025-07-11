import { Request, Response } from 'express';
import { listObjectsService } from '../../services/list-objects.js';

export const listAllObjectsController = async(_req: Request, res: Response)=>{
    

    const objectList = await listObjectsService()

    const response: ServerResponse = {
        message: objectList ? 'Successfully retrieved all objects.': 'No objects found',
        success: true,
        data: objectList || []
    }

    res.send(response)
}
