import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { putObjectController } from "../controllers/s3/put-object.js";
import { multerMemory } from "../middleware/multer.js";
//*types:





export const router = Router();


router.post('/put-object-single', multerMemory.single('myFileKey'),  validate(putObjectController) )


