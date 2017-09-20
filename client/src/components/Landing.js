import React from 'react';
import Console from './Console';


const Landing = () => {
    return(
        <div>
            <span className="grey">(to start using the API, write "docs")</span>
            <Console route="/root"/>
        </div>
    )
}

export default Landing
