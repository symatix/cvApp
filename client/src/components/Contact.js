import React, { Component } from 'react';
import { connect } from 'react-redux';
import Console from './Console';

class Contact extends Component {

    render(){
        const { contact } = this.props;

        return(
            <div>
                <pre>
                    {`
                  _             _
                 | |           | |
   ___ ___  _ __ | |_ __ _  ___| |_
  / __/ _ \\| '_ \\| __/ _' |/ __| __|
 | (_| (_) | | | | || (_| | (__| |_
  \\___\\___/|_| |_|\\__\\__,_|\\___|\\__|
                    `}
                </pre>
                <p>Information requested<br/>---------------------</p>
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
                <p className="grey">
                    <span>- to send a request, run </span>
                    <code className="blue">api.post(request) </code>
                    or
                    <code className="blue"> .request</code></p>
                <Console route="/contact" />
            </div>
        )
    }
}

function mapStateToProps({ contact }){
    return { contact }
}

export default connect(mapStateToProps)(Contact)
