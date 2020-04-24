import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
    return React.createElement(
        'div',
        { id: 'something-important' },
        React.createElement('h1', {}, 'Adopt me!!!'),
        React.createElement(Pet, {
            name: 'Luna',
            animal: 'dog',
            breed: 'havanese',
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'havanese',
        }),
        React.createElement(Pet, {
            name: 'Doing',
            animal: 'Fish',
            breed: 'whatever',
        })
    )
}

render(React.createElement(App), document.getElementById('root'))
