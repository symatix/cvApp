import React from 'react';


const DocsInfo = () => {
    return(
        <div>
            <pre>{`
           _____ _____   _____                                        _        _   _
     /\\   |  __ \\_   _| |  __ \\                                      | |      | | (_)
    /  \\  | |__) || |   | |  | | ___   ___ _   _ _ __ ___   ___ _ __ | |_ __ _| |_ _  ___  _ __
   / /\\ \\ |  ___/ | |   | |  | |/ _ \\ / __| | | | '_ ' _ \\ / _ \\ '_ \\| __/ _' | __| |/ _ \\| '_ \\
  / ____ \\| |    _| |_  | |__| | (_) | (__| |_| | | | | | |  __/ | | | || (_| | |_| | (_) | | | |
 /_/    \\_\\_|   |_____| |_____/ \\___/ \\___|\\__,_|_| |_| |_|\\___|_| |_|\\__\\__,_|\\__|_|\\___/|_| |_|
            `}</pre>
            <p>The API is exposed via local tunnel. This version adds several features that enable communication to fetch and send data.<br/>
            The commands are issued using a CLI interface.</p>
            <p>To fetch data from the server, such as list of services, portfolio, contact, etc., use command
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
