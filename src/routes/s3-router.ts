import { Router } from "express";
import { validate } from "../middleware/validateBody.js";
import { signupSchema } from "../zodSchemas/user-schema.js";
import { putObject } from "../controllers/s3/put-object.js";
//*types:





export const router = Router();


router.post('/put-object', validate(putObject, signupSchema) )


