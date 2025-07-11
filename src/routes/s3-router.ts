import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { putObjectSingleController } from "../controllers/s3/put-object-single.js";
import { multerMemory } from "../middleware/multer.js";
import { request_putObjectSingleSchema } from "../zodSchemas/file-schema.js";
import { getObjectController } from "../controllers/s3/get-object.js";

export const router = Router();

router.post('/put-object-single', multerMemory.single('myFieldKey'),  validate(putObjectSingleController, request_putObjectSingleSchema))




router.get('/get-object/:fileName', validate(getObjectController))