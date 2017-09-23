import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import Console from './Console';
import HeadingServices from './headings/HeadingServices'

class Services extends Component {
    renderServices() {
        return this.props.services.map(({ service }) => {
            return (
                <li className="grey-card" key={service}>
                    {service}
                </li>
            );
        });
    }

    renderContent() {
        if (!_.isEmpty(this.props.services)) {
            return (
                <div>
                    <p>
                        List of services<br />---------------------
                    </p>
                    <ul>{this.renderServices()}</ul>
                </div>
            );
        }
        return;
    }

    render() {
        return (
            <div>
                <div className="card">
                        <div className="card-content">
                        <HeadingServices />
                        {this.renderContent()}
                    </div>
                </div>
                <Console route="/services"/>
            </div>
        );
    }
}

function mapStateToProps({ services }) {
    return { services };
}

export default connect(mapStateToProps)(Services);
