import { Request, Response } from 'express';
import { putObjectService } from '../../services/PutObjectCommand.js';
import { Request_putObjectSingleSchemaType } from '../../zodSchemas/file-schema.js';

export const putObjectSingleController = async(req: Request, res: Response)=>{

    
    const file  = req.file as unknown as Request_putObjectSingleSchemaType

    console.log(file.mimetype);
    console.log(file.fileName);
    

    // const result = await putObjectService({
    //     buffer: file.buffer,
    //     fileName: file.fileName,
    //     mimeType: file.mimetype
    // })

    

    // const response: ServerResponse = {
    //     message: 'Success',
    //     success: true,
    //     data: result
    // }

    res.send(file.fileName);
    
}