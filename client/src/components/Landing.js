import React from 'react';
import Console from './Console';
import HeadingLanding from './headings/HeadingLanding'

const Landing = () => {
    return(
        <div>
            <HeadingLanding />
            <span className="grey">(to start using the API, write "docs" or use exposed commands &uarr;)</span>
            <Console route="/root"/>
        </div>
    )
}

export default Landing
