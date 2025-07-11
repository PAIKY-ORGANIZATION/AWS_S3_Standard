import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../lib/s3-client.js";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


const _getCommand = (fileName: string)=>{

    return new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName 
    }) 
}


export const getObjectService = async(fileName: string)=>{

    const command = _getCommand(fileName)
    return await s3Client.send(command)
}

export const getObjectSignedURLservice = async(fileName: string)=>{

    const command = _getCommand(fileName)
    return getSignedUrl(s3Client, command, {
        expiresIn: 5 //? 5 seconds
    })
}


