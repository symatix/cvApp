import React, { Component } from 'react';
import { connect } from 'react-redux';
import Console from './Console';
import HeadingContact from './headings/HeadingContact'

class Contact extends Component {

    render(){
        const { contact } = this.props;

        return(
            <div>
                <div className="card">
                    <div className="card-content">
                        <HeadingContact />
                        <p>Information requested<br/>---------------------</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td><span className="grey-card">Name:</span></td>
                                    <td>{contact.first_name} {contact.last_name}</td>
                                </tr>
                                <tr>
                                    <td><span className="grey-card">Occupation:</span></td>
                                    <td>{contact.occupation}</td>
                                </tr>
                                <tr>
                                    <td><span className="grey-card">E-Mail:</span></td>
                                    <td>{contact.email}</td>
                                </tr>
                                <tr>
                                    <td><span className="grey-card">Telephone:</span></td>
                                    <td>{contact.telephone}</td>
                                </tr>
                                <tr>
                                    <td><span className="grey-card">Web:</span></td>
                                    <td>{window.location.href}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="grey-card">
                            <span>- to send a request:<br/></span>
                            <code className="green">api.post(request) </code>
                            or
                            <code className="green"> .request</code></p>
                        </div>
                    </div>
                <Console route="/contact" />
            </div>
        )
    }
}

function mapStateToProps({ contact }){
    return { contact }
}

export default connect(mapStateToProps)(Contact)
