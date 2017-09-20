import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RequestForm extends Component {
    render(){
        return(
            <div>
                Request Form
            </div>
        )
    }
}

export default connect(null, actions)(RequestForm)
