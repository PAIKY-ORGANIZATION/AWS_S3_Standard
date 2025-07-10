import multer from 'multer'

export const multerMemory = multer({
    storage: multer.memoryStorage(),
    limits: {
        fields: 1,
        files:3,
        fileSize: 1e7 //$ 10 MB
    }
})