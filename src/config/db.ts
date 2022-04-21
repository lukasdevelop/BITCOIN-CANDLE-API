import { connect } from 'mongoose'
import { config } from 'dotenv'
config()

export const connectToMongoDB = async () => {
    await connect(process.env.MONGODB_CONNECTION_URL)
}