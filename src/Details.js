import pet from '@frontendmasters/pet'
import React from 'react'

import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import ThemeContext from './ThemeContext'

export class Details extends React.Component {
    state = { loading: true }
    // constructor(props) {
    //     super(props)
    //     // components are master of their state
    //     this.state = {
    //         loadinfg: true,
    //     }
    // }
    componentDidMount() {
        pet.animal(this.props.id)
            .then(({ animal }) => {
                console.log(animal)
                this.setState({
                    url: animal.url,
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false,
                })
            })
            .catch((err) => this.setState({ error: err }))
    }
    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }
        const { animal, breed, location, description, name, media } = this.state
        return (
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <ThemeContext.Consumer>
                        {(themeHook) => (
                            <button style={{ backgroundColor: themeHook[0] }}>
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>

                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}
