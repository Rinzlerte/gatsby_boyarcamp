import React from 'react'

const SectionTitle = ({title, description}) =>  (
    <div className='section-title--wrapper'>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
)

export default SectionTitle