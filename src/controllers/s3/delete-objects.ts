import { Request, Response } from 'express';
import { deleteAllObjectsService } from '../../services/delete-objects.js';

export const deleteObjectsController = async(req: Request, res: Response)=>{
    const result = await deleteAllObjectsService()
}