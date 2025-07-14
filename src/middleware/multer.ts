// import multer from 'multer'

import { UnprocessableEntity } from 'custom-exceptions-express';
import { NextFunction, Request, Response } from 'express';
import multer, { MulterError } from 'multer';

export const multerMemory = multer({
	storage: multer.memoryStorage(),
	limits: {
		fields: 1,
		files: 3,
		fileSize: 10e6, //$ 10 MB
	},
});








//% This would normally be passed to the route handler like:
// const uploadMemory = multerMemory.single('myFieldKey'); 
// router.post('/put-object-single', multerMemory.single('myFieldKey'), putObjectSingleController)
//% But since Multer resolves errors with callbacks instead of with promises we cannot pass "uploadMemory" to validate()


//% that is why we need this call back that works with an error callback.
export const uploadSingleValidated = (fieldName: string) => { //! the only reason why we are rapping and returning a new function is so that we can pass a different field name.
	return (req: Request, res: Response, next: NextFunction) => {
		//* multerMemory.<method> returns you a function for express to call with req and res
		multerMemory.single(fieldName)(req, res, (err: any) => {
			if (err instanceof MulterError)  return next(new UnprocessableEntity(err.message)) 
			if (err) return next(err)
			next();
		});
	};
}
export const uploadArrayValidated = (fieldName: string, maxFileCount: number)=>{

	return (req: Request, res: Response, next: NextFunction)=>{
		//* multerMemory.<method> returns you a function for express to call with req and res
		multerMemory.array(fieldName, maxFileCount)(req, res, (err: any)=>{
			if(err instanceof MulterError) return next(new UnprocessableEntity(err.message))
			if(err) return next(err)
			next()
		})
	}
}





