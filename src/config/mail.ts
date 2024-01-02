import { SESClient, SESClientConfig } from '@aws-sdk/client-ses'

const accessKeyId = process.env.AWS_SNS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SNS_SECRET_ACCESS_KEY
const region = process.env.AWS_SES_REGION

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
