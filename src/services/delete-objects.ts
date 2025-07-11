import {DeleteObjectsCommand} from '@aws-sdk/client-s3'
import { listObjectsService } from './list-objects.js'
import { s3Client } from '../lib/s3-client.js'




export const deleteAllObjectsService = async()=>{

    const ObjectList = await listObjectsService()

    const parsedObjectList = ObjectList.map((object)=>{
        return {Key: object.Key}
    })

    const command = new DeleteObjectsCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Delete: {
            Objects: parsedObjectList
        }
    })

    return await s3Client.send(command)


}