import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClient } from '../actions';
import { checkDevice } from '../utility/check_device'

class ClientData extends Component {
    componentDidMount(){
        this.props.fetchClient();
    }

    caclualteLoadTime(){
        const ms = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return ((ms / 1000) % 60);
    }

    render(){
        const device = checkDevice();
        return(
            <div className="header grey">
                <table>
                    <tbody>
                        <tr>
                            <td>Incoming request from</td>
                            <td>=> <span className="green">{this.props.client.stateprov} </span> @ <span className="green">{new Date().toString()}</span></td>
                        </tr>
                        <tr>
                            <td>Message</td>
                            <td>=> <span className="green">Welcome to SERVICE API by Dino Kraljeta</span></td>
                        </tr>
                        <tr>
                            <td>Logging request source to server</td>
                            <td>=> <span className="red">{this.props.client.address}</span></td>
                        </tr>
                        <tr>
                            <td>Deploying to client</td>
                            <td>=> <span className="red">{device ? device : "desktop arhitecture"}</span></td>
                        </tr>
                        <tr>
                            <td>Response time</td>
                            <td>=> <span className="red">{this.caclualteLoadTime()}</span> seconds</td>
                        </tr>
                        <tr>
                            <td>Exposed commands</td>
                            <td>=> &#123;
                                <span className={this.props.result === "portfolio" ? "red" : "green"}> .portfolio </span>
                                <span className={this.props.result === "services" ? "red" : "green"}>.services </span>
                                <span className={this.props.result === "contact" ? "red" : "green"}>.contact </span>
                                <span className={this.props.result === "request" ? "red" : "green"}>.request </span>
                                <span className={this.props.result === "error" ? "red" : "hidden"}>[ERROR]</span>
                                &#125;
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({ client, result }){
    return { client, result }
}

export default connect(mapStateToProps, { fetchClient })(ClientData)
