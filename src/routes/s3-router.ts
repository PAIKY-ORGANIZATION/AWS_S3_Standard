import { Router } from 'express';
import { validate } from '../middleware/validateRequest.js';
import { putObjectSingleController } from '../controllers/s3/put-object-single.js';
import { uploadArrayValidated, uploadSingleValidated } from '../middleware/multer.js';
import { request_putObjectMultipleSchema, request_putObjectSingleSchema } from '../zodSchemas/file-schemas.js';
import { getObjectController } from '../controllers/s3/get-object.js';
import { putObjectMultipleFilesController } from '../controllers/s3/put-object-multiple-files.js';
import { listAllObjectsController } from '../controllers/s3/list-all-objects.js';
import { deleteObjectsController } from '../controllers/s3/delete-objects.js';

export const router = Router();


//* PutObject
router.post('/put-object-single', uploadSingleValidated('myFieldKey'), validate(putObjectSingleController, request_putObjectSingleSchema));

router.post('/put-object-multiple', uploadArrayValidated('myFieldKey', 3), validate(putObjectMultipleFilesController, request_putObjectMultipleSchema));



//* GetObject
router.get('/get-object/:fileName', validate(getObjectController));


//* ListObjects
router.get('/list-all-objects', validate(listAllObjectsController))

//* DeleteObjects
router.delete('/delete-all-objects', validate(deleteObjectsController))