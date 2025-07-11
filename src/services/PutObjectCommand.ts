import {PutObjectCommand} from '@aws-sdk/client-s3'
import { s3Client } from '../lib/s3-client.js'


export const putObjectService = async(buffer: Buffer, fileName: string, mimeType: string)=>{
    
    const putObjectCommand = new PutObjectCommand({
        Key: fileName,
        Body: buffer,
        Bucket: process.env.AWS_BUCKET_NAME!,
        ContentType: mimeType
    })


    const result = await s3Client.send(putObjectCommand)
    return result
}


