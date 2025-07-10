import {PutObjectCommand} from '@aws-sdk/client-s3'
import { s3Client } from '../lib/s3-client.js'




const putObjectCommand = new PutObjectCommand({
    Key: '',
    Body: '',
    Bucket: ''
})


const result = await s3Client.send(putObjectCommand)




console.log(result);
