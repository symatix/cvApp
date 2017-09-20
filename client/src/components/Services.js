import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

import Console from './Console';

class Services extends Component {
    renderServices() {
        return this.props.services.map(({ service }) => {
            return (
                <li className="grey" key={service}>
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
        console.log(this.props.services);
        return (
            <div>
                <pre>
                    {`
                      _
                     (_)
  ___  ___ _ ____   ___  ___ ___  ___
 / __|/ _ \\ '__\\ \\ / / |/ __/ _ \\/ __|
 \\__ \\  __/ |   \\ V /| | (_|  __/\\__ \\
 |___/\\___|_|    \\_/ |_|\\___\\___||___/
                    `}
                </pre>
                {this.renderContent()}
                <Console route="/services"/>
            </div>
        );
    }
}

function mapStateToProps({ services }) {
    return { services };
}

export default connect(mapStateToProps)(Services);
