import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../lib/s3-client.js";






export const getObjectService = async(fileName: string)=>{

    const getObjectCommand = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName 
    }) 

    return await s3Client.send(getObjectCommand)
}

