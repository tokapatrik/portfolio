'use server'

import { SendEmailCommand } from '@aws-sdk/client-ses'
import { ContactFormSchema, ContactForm } from '@/models/contact'
import sesClient from '@/config/mail'

export async function sendContactMessage(data: ContactForm) {
    const safeParseResult = ContactFormSchema.safeParse(data)
    if (!safeParseResult.success) {
        return { errorMsg: String(safeParseResult.error.issues[0]) }
    }

    const contactMailFrom = process.env.CONTACT_MAIL_FROM
    const contactMailTo = process.env.CONTACT_MAIL_TO
    if (!contactMailFrom || !contactMailTo) {
        return { errorMsg: 'Hiba az üzenet küldése során' }
    }

    const sendEmailCommand = new SendEmailCommand({
        Source: contactMailFrom,
        Destination: {
            ToAddresses: [contactMailTo]
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                    Name: ${safeParseResult.data.name}<br>
                    E-mail: ${safeParseResult.data.email}<br><br>
                    ${safeParseResult.data.message.replace(/\n/g, '<br>')}
                    `
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Új üzenet érkezett! - Portfólió'
            }
        }
    })

    try {
        await sesClient.send(sendEmailCommand)
    } catch (e) {
        console.error(`Failed to send email: ${e}`)
        return { errorMsg: 'Hiba az üzenet küldése során' }
    }

    return { successMsg: 'Üzenet elküldve' }
}
