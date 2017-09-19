import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class Docs extends Component {


    renderParameters(){
        return this.props.docs.parameters.map(({ name, type, description }) => {
            return(
                <tr key={name}>
                    <td><span className="blue">{name}</span></td>
                    <td className={type === "POST" ? "red" : "green"}>{type}</td>
                    <td>{description}</td>
                </tr>
            )
        })
    }

    renderContent(){
        if (!_.isEmpty(this.props.docs)){
            return(
                <div>
                    <p>API DOCUMENTATION</p>
                    <p>The API is exposed via local tunnel. This version adds several features that enable communication to fetch and send data.<br/>
                    The commands are issued using a CLI interface.</p>
                    <p>To fetch data from the server, such as list of services, cv, portfolio, etc., use command
                        <code className="blue"> api.
                            <span className="green">get</span>(<span className="grey">[PARAM]</span>)
                        </code><br/>
                        To send data to the server (eg.: contact form), use commands
                        <code className="blue"> api.
                            <span className="red">post</span>(<span className="grey">[PARAM]</span>)
                        </code>
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <td>PARAMETER</td>
                                <td>TYPE</td>
                                <td>DESCRIPTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderParameters()}
                        </tbody>
                    </table>
                    <p>Usage examples</p>
                    <ul>
                        <li><code className="blue">api.get(services)</code> <span className="grey">- lists all services provided</span></li>
                        <li><code className="blue">api.get(contact)</code> <span className="grey">- display contact information</span></li>
                        <li><code className="blue">api.post(request)</code> <span className="grey">- send a request</span> @DinoKraljeta</li>
                    </ul>
                    <p>To clear the screen, simply write <code className="blue">cls</code></p>
                </div>
            )
        }
        return;
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps({ docs }){
    return { docs }
}
export default connect(mapStateToProps, { fetchApi })(Docs);
