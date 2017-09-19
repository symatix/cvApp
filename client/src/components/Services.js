import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

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
                    <span>> api.get(services)</span>
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
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps({ services }) {
    return { services };
}

export default connect(mapStateToProps)(Services);
