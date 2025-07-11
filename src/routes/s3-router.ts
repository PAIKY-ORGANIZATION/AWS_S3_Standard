import { Router } from 'express';
import { validate } from '../middleware/validateBody.js';
import { putObjectSingleController } from '../controllers/s3/put-object-single.js';
import { multerMemory, uploadSingleValidated } from '../middleware/multer.js';
import { request_putObjectSingleSchema } from '../zodSchemas/file-schema.js';
import { getObjectController } from '../controllers/s3/get-object.js';
import { putObjectMultipleFilesController } from '../controllers/s3/put-object-multiple-files.js';

export const router = Router();


//* PutObject
router.post('/put-object-single', uploadSingleValidated('myFieldKey'), validate(putObjectSingleController, request_putObjectSingleSchema));

router.post('/put-object-multiple', multerMemory.array('myFieldKey', 3), putObjectMultipleFilesController);



//* GetObject
router.get('/get-object/:fileName', validate(getObjectController));
