import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClient } from '../actions';

class ClientData extends Component {
    componentDidMount(){
        this.props.fetchClient();
    }

    caclualteLoadTime(){
        const ms = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return ((ms / 1000) % 60);
    }

    render(){
        return(
            <div className="grey">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Incoming request from
                            </td>
                            <td>
                                => <span className="green">{this.props.client.stateprov} </span> @ <span className="green">{new Date().toString()}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Logging request source to server
                            </td>
                            <td>
                                => <span className="red">{this.props.client.address}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Deploying to client
                            </td>
                            <td>
                                => <span className="red">{navigator.appVersion}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                App load time
                            </td>
                            <td>
                                => <span className="red">{this.caclualteLoadTime()}</span> seconds
                            </td>
                        </tr>
                    </tbody>
                </table>
                --------------------------------------------------
            </div>
        )
    }
}

function mapStateToProps({ client }){
    return { client }
}

export default connect(mapStateToProps, { fetchClient })(ClientData)
