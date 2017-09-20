import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

import DocsInfo from './DocsInfo';
import Console from './Console';

class Docs extends Component {


    renderParameters(){
        return this.props.docs.parameters.map(({ name, type, description }) => {
            return(
                <tr key={name}>
                    <td><span className="blue">{name}</span></td>
                    <td className={type === "POST" ? "red" : "green"}>{type}</td>
                    <td>{description}</td>
                </tr>
            )
        })
    }

    renderUsage(){
        return this.props.docs.usage.map(({ command, description }) => {
            return(
                <tr key={command}>
                    <td>&#8226;<code className="blue"> {command}</code></td>
                    <td><code className="grey">{description}</code></td>
                </tr>
            )
        })
    }

    renderNav(){
        return this.props.docs.nav.map(nav =>{
            return(<code key={nav}> | <span className="blue">{nav}</span></code>)
        })
    }

    render(){
        return(
            <div>
                <DocsInfo />
                <table>
                    <thead>
                        <tr>
                            <td>PARAMETER</td>
                            <td>TYPE</td>
                            <td>DESCRIPTION</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderParameters()}
                    </tbody>
                </table>
                <p>Usage:</p>
                <table className="usage">
                    <tbody>
                        {this.renderUsage()}
                    </tbody>
                </table>
                <p>Quick usage:<br/>
                    {this.renderNav()} |
                </p>
                <Console />
            </div>
        )
    }
}

function mapStateToProps({ docs }){
    return { docs }
}
export default connect(mapStateToProps, { fetchApi })(Docs);
