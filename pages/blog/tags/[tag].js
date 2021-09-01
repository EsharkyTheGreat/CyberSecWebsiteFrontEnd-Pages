import { Component } from "react"

import Header from "../../../components/Header.js"

export default class extends Component {
    static async getInitialProps({ query }) {
        return {
            tag: query.tag
        }
    }

    render() {
        return (
            <>
                <Header />
                <h1>Blog posts tagged as <u>{this.props.tag}</u></h1>
            </>
        )
    }
}