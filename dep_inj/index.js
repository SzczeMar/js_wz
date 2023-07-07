import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import {Blog} from './blog.js';
import {createDb} from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
    const db = createDb(join(__dirname, 'blog.sqlite3'));
    const blog = new Blog(db);
    await blog.initialize();
    const posts = await blog.getAllPosts();
    if (posts.length === 0) {
        console.log('No posts found, run node import-posts.js to import some posts');
    }

    for (const post of posts) {
        console.log(post.title);
        console.log('-'.repeat(post.title.length));
        console.log(post.content);
        console.log(`Published on ${new Date(post.created_at).toISOString()}`)
    }
    }
main().catch(err => console.error(err));