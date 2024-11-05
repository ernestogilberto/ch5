import { MongoMemoryServer } from 'mongodb-memory-server'

const globalSetup = async () => {
  const instance = await MongoMemoryServer.create({
    binary: {
      version: '7.0.6',
    },
  })

  global.__MONGOINSTANCE = instance
  process.env.DATABASE_URL = instance.getUri()
}

export default globalSetup
