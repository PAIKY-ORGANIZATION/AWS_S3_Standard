import { Request, Response } from 'express';

export const putObjectController = async(req: Request, res: Response)=>{




    
    res.send(req.file?.originalname);
    
}