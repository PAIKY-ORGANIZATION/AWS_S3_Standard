import { Router } from 'express';
import { validate } from '../middleware/validateRequest.js';
import { putObjectSingleController } from '../controllers/s3/put-object-single.js';
import { uploadArrayValidated, uploadSingleValidated } from '../middleware/multer.js';
import { request_putObjectMultipleSchema, request_putObjectSingleSchema } from '../zodSchemas/file-schemas.js';
import { putObjectMultipleFilesController } from '../controllers/s3/put-object-multiple-files.js';
import { listAllObjectsController } from '../controllers/s3/list-objects/list-all-objects.js';
import { deleteObjectsController } from '../controllers/s3/delete-objects.js';
import { listAllObjectsURLs } from '../controllers/s3/list-objects/list-all-objects-urls.js';
import { getObjectController } from '../controllers/s3/get-object/get-object.js';
import { getObjectSignedURLcontroller } from '../controllers/s3/get-object/get-object-signed-url.js';

export const router = Router();


//* PutObject
router.put('/put-object-single', uploadSingleValidated('myFieldKey'), validate(putObjectSingleController, request_putObjectSingleSchema));

router.put('/put-object-multiple', uploadArrayValidated('myFieldKey', 3), validate(putObjectMultipleFilesController, request_putObjectMultipleSchema));



//* GetObject
router.get('/get-object/:fileName', validate(getObjectController));
router.get('/get-object-signed-url/:fileName', validate(getObjectSignedURLcontroller))

//* ListObjects
router.get('/list-all-objects', validate(listAllObjectsController))

router.get('/list-all-objects-urls', validate(listAllObjectsURLs))

//* DeleteObjects
router.delete('/delete-all-objects', validate(deleteObjectsController))

