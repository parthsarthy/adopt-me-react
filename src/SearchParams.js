import pet, { ANIMALS } from '@frontendmasters/pet'
import React, { useContext, useEffect, useState } from 'react'

import Results from './Results'
import ThemeContext from './ThemeContext'
import useDropdown from './useDropDown'

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA')
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropDown] = useDropdown('Animal', 'Dog', ANIMALS)
    const [breed, BreedDropDown, setBreed] = useDropdown('Breed', '', breeds)
    const [pets, setPets] = useState([])
    const [theme] = useContext(ThemeContext)

    async function requestPets() {
        // await-> wait until we get the data
        const { animals } = await pet.animals({ location, breed, type: animal })
        setPets(animals || [])
    }

    useEffect(() => {
        setBreeds([])
        setBreed('')

        pet.breeds(animal).then(({ breeds: apiBreeds }) => {
            const breedStrings = apiBreeds.map(({ name }) => name)
            setBreeds(breedStrings)
        }, console.error)
    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    requestPets()
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <AnimalDropDown />
                <BreedDropDown />
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams
