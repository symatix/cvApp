import React, { Component } from 'react';
import Console from './Console';

class Protfolio extends Component{
    render(){
        return(
            <div>
                <pre>
                    {`
                   _    __      _ _
                  | |  / _|    | (_)
  _ __   ___  _ __| |_| |_ ___ | |_  ___
 | '_ \\ / _ \\| '__| __|  _/ _ \\| | |/ _ \\
 | |_) | (_) | |  | |_| || (_) | | | (_) |
 | .__/ \\___/|_|   \\__|_| \\___/|_|_|\\___/
 | |
 |_|
                    `}
                </pre>
                <p className="red">NOT AVAILABLE</p>
                <Console route="/portfolio" />
            </div>
        )
    }
}
export default Protfolio;
