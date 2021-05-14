import React from 'react';

import Footer from './footer/footer.js';
import Header from './header/header.js';

// let something = new Header();
// let output = something.render();
// output goes into #root

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      words: "URL:"
    };
  }

  handleIncrement = () => {
    // this.state.clicks++;
    let clicks = this.state.clicks + 1;
    this.setState({clicks});
    // this.setState({ ...state, clicks:clicks })
  }

  handleChangeInput = (e) => {
    this.setState(
      {...this.state, words: e.target.value}
    )
    // this could have been:
    // let words = e.target.value;
    // this.setState({words})
  }

  render() {
    return (
      <>
        <Header />
        <div>
          {this.state.words}
          <div>
            <input type="text" onChange={this.handleChangeInput} />
            <button onClick={this.handleIncrement}>GO!</button>
          </div>
          <button onClick={this.handleIncrement}>GET</button>
          <button onClick={this.handleIncrement}>POST</button>
          <button onClick={this.handleIncrement}>PUT</button>
          <button onClick={this.handleIncrement}>DELETE</button>
        </div>
        <div>

          
        </div>
        <Footer />
      </>
    );
  }

}

export default App;
