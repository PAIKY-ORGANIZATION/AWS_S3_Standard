import { Request, Response } from 'express';
import { putObjectService } from '../../services/PutObjectCommand.js';

export const putObjectSingleController = async(req: Request, res: Response)=>{

    


    const result = await putObjectService({
        buffer: req.file?.buffer,
        fileName: req.file?.filename,
        mimeType: req.file?.mimetype
    })

    

    const response: ServerResponse = {}

    res.send(req.file?.originalname);
    
}