import { Request, Response } from 'express';
import { putObjectService } from '../../../services/put-object-command.js';
import { Request_putObjectSingleSchemaType } from '../../../zodSchemas/file-schemas.js';

export const putObjectSingleController = async(req: Request, res: Response)=>{
    //? ADD MATADATA AND HASH
    
    const file  = req.file as unknown as Request_putObjectSingleSchemaType //* We can assert this is the type if the validation went through.


    const result = await putObjectService({
        buffer: file.buffer,
        fileName: file.originalname,
        mimeType: file.mimetype
    })


    const response: ServerResponse = {
        message: 'Successfully uploaded file',
        success: true,
        data: result
    }

    res.send(response);
    
}