import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { putObjectSingleController } from "../controllers/s3/put-object-single.js";
import { multerMemory } from "../middleware/multer.js";
//*types:





export const router = Router();


router.post('/put-object-single', multerMemory.single('myFileKey'),  validate(putObjectSingleController) )


