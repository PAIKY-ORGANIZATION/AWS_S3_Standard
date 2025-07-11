import { Request, Response } from 'express';
import type {Request_putObjectSingleSchemaType} from '../../../zodSchemas/file-schemas.js'
import { putObjectService } from '../../../services/put-object-command.js';


export const putObjectMultipleFilesController = async(req: Request, res: Response)=>{

    const files = req.files as unknown as Request_putObjectSingleSchemaType[]

    for(const file of files){
        await putObjectService({
            buffer: file.buffer,
            fileName: file.originalname,
            mimeType: file.mimetype
        })
    }


    

    const response: ServerResponse = {
        message: 'Successfully uploaded all files',
        success: true,
    }   

    res.send(response)
}