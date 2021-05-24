import React from 'react';

import ReactJson from 'react-json-view';

import './results.scss'

class Results extends React.Component {  

  render() {
    return (
      <div id="results">
        <ReactJson src={this.props.data} />
      </div>
    );
  }
}

export default Results;