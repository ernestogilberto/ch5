import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const posts = await Post.find()
console.log(posts)
