// mostly code from reactjs.org/docs/error-boundaries.html
import Link from '@reach/router'
import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = { hasError: false }
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error('Error boundary caught error', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>
                    There was an error with this listing.{' '}
                    <Link to="/">Click here</Link> to back to the home page or
                    wait five seconds
                </h1>
            )
        }
        return this.props.children
    }
}
