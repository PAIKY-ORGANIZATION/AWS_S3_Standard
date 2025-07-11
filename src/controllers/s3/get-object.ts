import { Request, Response } from 'express';
import { getObjectService } from '../../services/get-object-command.js';

export const getObjectController = async(req: Request<{fileName: string}>, res: Response)=>{
    const fileName = req.params.fileName
    const result = await getObjectService(fileName)


    //@ts-ignore
    result.Body?.pipe(res)

}