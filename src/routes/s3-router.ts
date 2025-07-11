import { Router } from 'express';
import { validate } from '../middleware/validateBody.js';
import { putObjectSingleController } from '../controllers/s3/put-object-single.js';
import { multerMemory, uploadArrayValidated, uploadSingleValidated } from '../middleware/multer.js';
import { request_putObjectSingleSchema } from '../zodSchemas/file-schema.js';
import { getObjectController } from '../controllers/s3/get-object.js';
import { putObjectMultipleFilesController } from '../controllers/s3/put-object-multiple-files.js';
import { listAllObjectsController } from '../controllers/s3/list-all-objects.js';
import { deleteObjectsController } from '../controllers/s3/delete-objects.js';

export const router = Router();


//* PutObject
router.post('/put-object-single', uploadSingleValidated('myFieldKey'), validate(putObjectSingleController, request_putObjectSingleSchema));

router.post('/put-object-multiple', uploadArrayValidated('myFieldKey', 3), putObjectMultipleFilesController);



//* GetObject
router.get('/get-object/:fileName', validate(getObjectController));


//* ListObjects
router.get('/list-all-objects', validate(listAllObjectsController))

//* DeleteObjects
router.delete('/delete-all-objects', validate(deleteObjectsController))