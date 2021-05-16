import React from 'react';

import Header from './header/header.js';
import Form from './form/form.js';
import Footer from './footer/footer.js';

// let something = new Header();
// let output = something.render();
// output goes into #root

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Header />        
        <div>
          <Form />          
        </div>
        <Footer />
      </>
    );
  }

}

export default App;
