import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    // create a ref to store the DOM element
    this.urlElement = React.createRef();
    this.state = {
      url: '',
      method: 'get'
    };
  }

  handleUrlInput = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    await this.setState({ url: this.urlElement.current.value });

    //clear the input bar after user submits
    this.urlElement.current.value = null;
  }

  saveMethod =  (event) => {
    let { name, value } = event.target;
    
     this.setState({ method: value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleUrlInput}>
          <div>
            <div id='user-text'>
              <h3>URL: </h3>
              <input type="text" ref={this.urlElement} />
              <button onClick={this.handleUrlInput}>GO!</button>
            </div>

            <div class="method-buttons">
              <input type="radio" id="get" value="get" name="method" checked={this.state.method === "get"}
              onChange={this.saveMethod} />
              <label for="get">GET</label>

              <input type="radio" id="post" value="post" name="method" checked={this.state.method === "post"}
              onChange={this.saveMethod} />
              <label for="post">POST</label>

              <input type="radio" id="put" value="put" name="method" checked={this.state.method === "put"}
              onChange={this.saveMethod} />
              <label for="put">PUT</label>

              <input type="radio" id="delete" value="delete" name="method" checked={this.state.method === "delete"}
              onChange={this.saveMethod} />
              <label for="delete">DELETE</label>
            </div>

          </div>
        </form>
        <div class="output-text">
          <h2>{this.state.method} {this.state.url}</h2>
        </div>
      </>
    );
  }
}

export default Form;
