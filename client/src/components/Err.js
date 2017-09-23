import React from 'react';
import Console from './Console';

const Err = (props) => {
    return (
        <div className="grey">
            <p className="red">Command not recognized as an internal or external command, request or operable program.</p>
            <p>USAGE: api.get([PARAM])</p>
            <p>where [PARAM] is one of:<br/>
                <span className="indent">portfolio, services, contact</span></p>
            <p>QUICK USAGE:<br/>
                <span className="indent">.portfolio | .services | .contact | .request</span></p>
            <p>For more information type <code className="blue">help</code> or send a ticket with <code className="blue">api.post(request)</code></p>
            <Console />
        </div>
    );
}

export default Err;
