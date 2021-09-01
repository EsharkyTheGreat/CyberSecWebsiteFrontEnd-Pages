import { Component } from "react"
import Header from '../components/Header.js'
import Jumbotron from '../components/Jumbotron'
import PostCards from '../components/Postcards'
import getFiveNewestPosts from "../api/getFiveNewestPosts.js"
import Postcards from "../components/Postcards"
export default class extends Component {
    static async getInitialProps() {
        const apiResult = await getFiveNewestPosts()

        return {
            posts: apiResult && apiResult.posts
        }
    }
    render() {
        return (
            <div className="layout-wrapper">
                <Header />
                <div className="ht-main">
                    <Jumbotron />
                    <Postcards {...this.props} />
                </div>
            </div>
        )
    }
}