import { Octokit } from '@octokit/rest'

import { type Repository } from '@models/Repository'

export const octokit = new Octokit()

export const getBlogs = async () => {
    let blogs: Repository[] = []

    try {
        const { data: repositories }: { data: Repository[] } =
            await octokit.request('GET /orgs/react-serbia/repos')

        blogs = repositories.filter(repo => repo.name.includes('blog'))
    } catch (error) {
        console.log(error)
    }

    return blogs
}

export const getBlogContent = async () => {
    let blogsWithContent: (Repository & { content: string })[] = []

    try {
        const blogs = await getBlogs()

        blogsWithContent = await Promise.all(
            blogs.map(async blog => {
                const { data } = await octokit.request(
                    `GET /repos/react-serbia/${blog.name}/contents/README.md`
                )

                return { ...blog, content: atob(data.content) }
            })
        )
    } catch (error) {
        console.error(error)
    }

    return blogsWithContent
}
