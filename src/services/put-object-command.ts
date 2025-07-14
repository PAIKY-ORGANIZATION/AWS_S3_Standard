import {PutObjectCommand} from '@aws-sdk/client-s3'
import { s3Client } from '../lib/s3-client.js'


type PutObjectServiceParams = {
    buffer: Buffer,
    fileName: string,
    mimeType: string
}

export const putObjectService = async({buffer, fileName, mimeType}: PutObjectServiceParams)=>{
    


    

    const command = new PutObjectCommand({
        Key: fileName,
        Body: buffer,
        Bucket: process.env.AWS_BUCKET_NAME!,
        ContentType: mimeType
    })


    const result = await s3Client.send(command)
    return result
}


