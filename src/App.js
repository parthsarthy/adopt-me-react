import { Link, Router } from '@reach/router'
import React from 'react'
import { render } from 'react-dom'

import Details from './Details'
// import Details from './Details'
import SearchParams from './SearchParams'

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <React.StrictMode>
                <Router>
                    <SearchParams path="/" />
                    <Details path="/details/:id" />
                </Router>
            </React.StrictMode>
        </div>
    )
}

render(React.createElement(App), document.getElementById('root'))
