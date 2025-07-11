import { z } from 'zod'

//prettier-ignore
export const request_putObjectSingleSchema = z.object({
    file: z.object({
        buffer: z.instanceof(Buffer),
        originalname: z.string({required_error: 'File name is required'}).min(1).nonempty({message: 'File name is required'}), //* I found it difficult to send the file WITHOUT original name. To test this works is to add it a property that doesn't exist here such as the following and tests that it gets rejected Specifically from this file:
        // testProperty: z.string({required_error: 'Test property is required'}), //$ YOU CAN MAKE SURE THE FILE GETS REJECTED SPECIFICALLY BY NOT HAVING THIS PROPERTY HERE
        mimetype: z.string({required_error: 'Mimetype is required'}).min(1).nonempty({message: 'Mimetype is required'})
    },
    {
        required_error: 'File is required' //! This part is critical to be added
    })

})


export type Request_putObjectSingleSchemaType = z.infer<typeof request_putObjectSingleSchema>['file']




