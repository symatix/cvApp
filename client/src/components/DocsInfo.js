import React from 'react';
import HeadingDocs from './headings/HeadingDocs'

const DocsInfo = () => {
    return(
        <div>
            <HeadingDocs />
            <p>The idea behing this API is that you have command over what happends inside your browser. No clicks and no hidden magic.<br/>
            You want something! Type a GET request. You want to send something? Type a POST request!</p>
            <p>The API is exposed via local tunnel. This version adds several features that enable fetching and sending data between the client, API server and the database.<br/>
            The commands are issued using a CLI interface.</p>
            <p>To fetch data from the server, such as list of services, portfolio, contact and contact, use command
                <code className="blue"> api.
                    <span className="green">get</span>(<span className="grey">[PARAM]</span>)
                </code><br/>
                To send data to the server (eg.: contact form), use commands
                <code className="blue"> api.
                    <span className="red">post</span>(<span className="grey">[PARAM]</span>)
                </code>
            </p>
            <p>To clear the screen, simply write <code className="blue">cls</code></p>
        </div>
    )
}

export default DocsInfo;
