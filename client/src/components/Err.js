import React from 'react';

const Err = () => {
    return (
        <div className="grey">
            <p className="red">The command is not recognized as an internal or external command, request or operable program.</p>
            <p>Usage: api.get([PARAM])</p>
            <p>where [PARAM] is one of:<br/>
                &emsp;portfolio, services, contact, ...</p>
            <p>For more information type <code className="blue">help</code> or send a ticket with <code className="blue">api.post(request)</code></p>
        </div>
    );
}

export default Err;
