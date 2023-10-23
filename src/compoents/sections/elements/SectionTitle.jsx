import React from 'react'

const SectionTitle = ({title, description, descriptionAdd}) =>  (
    <>
        <div className="subtitle-holder">
            <div className="separator"></div>
            <div className="subtitle">{title}</div>
        </div>
        {
            descriptionAdd ? <h2 className="title title-mar">{description}<span className="span-black">{descriptionAdd}</span></h2> :
            <h2 className="title title-mar">{description}</h2>
        }
    </>
)

export default SectionTitle