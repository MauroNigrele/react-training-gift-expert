import PropTypes from 'prop-types';
import React from 'react'

export const GifItem = ({title, url}) => {
    return (
        <div className='card'>
            <h4> {title} </h4>
            <img src={ url } alt={ title }/>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}