import React, { Component } from 'react';

import ClientData from './ClientData';
import Landing from './Landing';
import Docs from './Docs';
import Console from './Console';
import Services from './Services';
import Contact from './Contact';
import ContactSolo from './ContactSolo';

class App extends Component {
    handleClick(){
        document.getElementById("console").focus();
        return;
    }
  render() {
    return (
      <div onClick={this.handleClick} className="App">
        <div>
            <ClientData />
            <Landing />
            <Docs />
            <Contact />
            <ContactSolo />
            <Services />
            <Console />
        </div>
      </div>
    );
  }
}

export default App;
