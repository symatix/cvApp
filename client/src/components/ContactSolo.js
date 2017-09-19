import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContactSolo extends Component {
    renderContent(){
        if(!_.isObject(this.props.contact)){
            return(
                <div>
                    <span>> api.get(contact/email)</span>
                    <p className="green">{this.props.contact}</p>
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

export default connect(mapStateToProps)(ContactSolo);
