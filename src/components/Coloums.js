import React from 'react'

import coloums from '../assets/coloums'
const Coloums = () => {
    return (
        <thead>
        <tr>{coloums.map(c => 
            <th>{c}</th>
            )}</tr>
        </thead>
    )
}

export default Coloums
