import React from 'react'
import './Story.css'
import {Avatar} from '@material-ui/core'

function Story({image, profileSrc, title}) {
    return (
        <div style={{background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${image})`,backgroundPosition: `center center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`}} className="story">
            <Avatar className="story__avatar" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
