import React from 'react';
import Console from './Console';


const Landing = () => {
    return(
        <div>
            <pre>
                {`
  __________________________________   ____.____________ ___________    _____ __________.___
 /   _____/\\_   _____/\\______   \\   \\ /   /|   \\_   ___ \\\\_   _____/   /  _  \\\\______   \\   |
 \\_____  \\  |    __)_  |       _/\\   Y   / |   /    \\  \\/ |    __)_   /  /_\\  \\|     ___/   |
 /        \\ |        \\ |    |   \\ \\     /  |   \\     \\____|        \\ /    |    \\    |   |   |
/_______  //_______  / |____|_  /  \\___/   |___|\\______  /_______  / \\____|__  /____|   |___|
        \\/         \\/         \\/                       \\/        \\/          \\/
                `}
            </pre>
            <span className="grey">(to start using the API, write "docs")</span>
            <Console route="/root"/>
        </div>
    )
}

export default Landing
