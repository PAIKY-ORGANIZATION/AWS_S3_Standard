import { Request, Response } from 'express';
import { listObjectsURLs } from '../../../services/list-objects.js';

export const listAllObjectsURLs = async(_req: Request, res: Response)=>{
    

    const urls = await listObjectsURLs()

    const response: ServerResponse = {
        message: urls ? 'Successfully retrieved all objects.': 'No objects found',
        success: true,
        data: urls || []
    }

    res.send(response)
}
