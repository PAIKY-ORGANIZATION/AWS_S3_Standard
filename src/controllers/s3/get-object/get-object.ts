import { Request, Response } from 'express';
import { BadRequest } from 'custom-exceptions-express';
import { getObjectService } from '../../../services/get-object-command.js';

export const getObjectController = async(req: Request<{fileName: string}>, res: Response)=>{
    const fileName = req.params.fileName
    const result = await getObjectService(fileName)

    if(!result.Body){
        throw new BadRequest('File not found')
    }


    // @ts-ignore
    result.Body.pipe(res)

}