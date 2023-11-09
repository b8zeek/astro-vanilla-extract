import { Octokit } from '@octokit/rest'

import { type Repository } from '../models'

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
