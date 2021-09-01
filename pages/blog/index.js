import { Component } from "react"
import getAllBlogPosts from "../../api/getAllBlogPosts.js"
import Header from "../../components/Header.js"
import PostCards from "../../components/Postcards.js"

export default class extends Component {
    static async getInitialProps() {
        const apiResult = await getAllBlogPosts()

        return {
            posts: apiResult && apiResult.posts
        }
    }
    render() {
        return (
            <>
                <Header />
                <PostCards {...this.props} />
            </>
        )
    }
}