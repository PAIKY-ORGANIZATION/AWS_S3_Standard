import { Request, Response } from 'express';
import { getObjectSignedURLservice } from '../../../services/get-object-command.js';
import { BadRequest } from 'custom-exceptions-express';

export const getObjectSignedURLcontroller = async(req: Request<{fileName: string}>, res: Response)=>{
    const fileName = req.params.fileName

    if(!fileName) throw new BadRequest('File name is required') 
    const signedUrl = await getObjectSignedURLservice(fileName)



    const response: ServerResponse = {
        message: 'Successfully obtained signed url',
        success: true,
        data: {signedUrl}
    }

    // @ts-ignore
    res.send(response)

}