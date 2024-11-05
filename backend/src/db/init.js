import mongoose from 'mongoose'

export const initDatabase = () => {
  const DATABASE_URL = process.env.DATABASE_URL

  mongoose.connection.on('open', () => {
    console.info('Successfully connected to the database', DATABASE_URL)
  })

  return mongoose.connect(DATABASE_URL)
}
