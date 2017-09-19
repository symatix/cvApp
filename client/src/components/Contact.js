import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {

    renderContent(){
        if (!_.isEmpty(this.props.contact) && _.isObject(this.props.contact)){
            const { contact } = this.props;
            return(
                <div>
                    <span>> api.get(contact)</span>
                    <p>Contact information<br/>---------------------</p>
                    <table>
                        <tbody>
                            <tr>
                                <td><span className="grey">Name:</span></td>
                                <td>{contact.first_name} {contact.last_name}</td>
                            </tr>
                            <tr>
                                <td><span className="grey">Occupation:</span></td>
                                <td>{contact.occupation}</td>
                            </tr>
                            <tr>
                                <td><span className="grey">E-Mail:</span></td>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <td><span className="grey">Telephone:</span></td>
                                <td>{contact.telephone}</td>
                            </tr>
                            <tr>
                                <td><span className="grey">Web:</span></td>
                                <td>{contact.web}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><span className="grey">To contact me now, run </span><code>api.post(request)</code> </p>
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

function mapStateToProps({ contact }){
    return { contact }
}

export default connect(mapStateToProps)(Contact)
