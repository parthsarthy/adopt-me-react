import React from 'react'
import { render } from 'react-dom'
// import Pet from './Pet'
import SearchParams from './SearchParams'

const App = () => {
    return (
        <div>
            <h1 id="something-important">Adopt Me!</h1>
            <SearchParams />
            {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cocktail" />
            <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
        </div>
    )
}

render(React.createElement(App), document.getElementById('root'))
