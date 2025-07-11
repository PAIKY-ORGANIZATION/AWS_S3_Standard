import { z } from 'zod'

//prettier-ignore
export const request_putObjectSingleSchema = z.object({
    file: z.object({
        buffer: z.instanceof(Buffer),
        // fileName: z.string({required_error: 'File name is required'}).min(1).nonempty({message: 'File name is required'}),
        mimetype: z.string({required_error: 'Mimetype is required'}).min(1).nonempty({message: 'Mimetype is required'})
    },
    {
        required_error: 'File is required' //! This part is critical to be added
    })

})


export type Request_putObjectSingleSchemaType = z.infer<typeof request_putObjectSingleSchema>['file']




