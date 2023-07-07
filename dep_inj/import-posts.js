import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Blog } from './blog.js';
import { createDb } from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const posts = [
    {
        id: 1,
        title: 'First post',
        content: 'Content of the first post',
        created_at: new Date('2023-07-07')
    },
    {
        id: 2,
        title: 'Second post',
        content: 'Content of the first post',
        created_at: new Date('2023-07-06')
    },
    {
        id: 3,
        title: 'More... post',
        content: 'Content of the first post',
        created_at: new Date('2023-07-05')
    }
]

async function main() {
    const db = createDb(join(__dirname, 'blog.sqlite3'));
    const blog = new Blog(db);
    await blog.initialize();

    await Promise.all(
        posts.map(
            (post) => blog.createPost(
                post.id,
                post.title,
                post.content,
                post.created_at
            )
        )
    )
    console.log('All posts imported')
}
main().catch(err => console.error(err));