import multer from 'multer'

export const multerMemory = multer({
    storage: multer.memoryStorage(),
    limits: {
        
    }
})