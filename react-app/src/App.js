import React from 'react';

import axios from 'axios';

import Header from './header/header.js';
import Form from './form/form.js';
import Results from './results.js';
import Footer from './footer/footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {},
      url: '',
      method: ''
    };
  }

  fetchData = async (userData) => {
    const method = userData.method || 'get';
    const url = userData.url;
    const body = userData.data || {};

    const response = await axios({
      method: method,
      url: url,
      body: body
    });

    const results = response.data;

    this.setState({ results });
  }

  render() {
    return (
      <>
        <Header />        
        <div>
          <Form apiHandler={this.fetchData} />          
        </div>
        <div>
          <Results data={this.state.results} />          
        </div>
        <Footer />
      </>
    );
  }

}

export default App;
