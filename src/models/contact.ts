import { z } from 'zod'

const customErrorMessages = {
    required: 'A mező kitöltése kötelező!',
    nameMinLength: 'A megadott név túl rövid!',
    emailInvalid: 'Hibás e-mail cím formátum!'
}

export const ContactFormSchema = z.object({
    name: z.string().trim().min(1, { message: customErrorMessages.required }).min(3, { message: 'A megadott név túl rövid! A névnek legalább 3 karakterből kell állnia.' }),
    email: z.string().trim().min(1, { message: customErrorMessages.required }).email({ message: 'Hibás e-mail cím formátum!' }),
    message: z.string().trim().min(1, { message: customErrorMessages.required })
})

export type ContactForm = z.infer<typeof ContactFormSchema>
