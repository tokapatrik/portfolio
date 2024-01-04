import { SESClient, SESClientConfig } from '@aws-sdk/client-ses'

const accessKeyId = process.env.SES_ACCESS_KEY
const secretAccessKey = process.env.SES_SECRET_ACCESS_KEY
const region = process.env.SES_REGION

if (!accessKeyId || !secretAccessKey || !region) {
    throw new Error('AWS SES credentials are not provided')
}

const SES_CONFIG: SESClientConfig = {
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    },
    region: region
}

const sesClient = new SESClient(SES_CONFIG)

export default sesClient
