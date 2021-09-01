import { Component } from "react"

import getFiveNewestPosts from "../api/getFiveNewestPosts.js"
import PostCard from "./Postcard"
export default class extends Component {
    static async getInitialProps() {
        const apiResult = await getFiveNewestPosts()
        console.log(apiResult)
        return {
            posts: apiResult && apiResult.posts
        }
    }

    render() {
        return (
            <>
                {
                    this.props.posts.map((post) => (
                        <PostCard title={post.title} imgLink={post.thumbnailImageUrl} content={post.urlTitle} />
                    ))
                }
            </>
        )
    }
}