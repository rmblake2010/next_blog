import matter from 'gray-matter'
import fs from 'fs'
import { PostMetaData } from './postMetaData'


const getPostMetaData = (): PostMetaData[] => {
    const folder = 'posts/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith('.md'))
    
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${filename}`, 'utf8')
        const matterResults = matter(fileContents)
        return {
            title: matterResults.data.title,
            date: matterResults.data.date,
            subtitle: matterResults.data.subtitle,
            slug: filename.replace('.md', '')
        }
    })

    return posts
}


export default getPostMetaData