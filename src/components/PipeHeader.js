import React, { Component } from 'react';
import './PipeHeader.scss';
// import _ from 'lodash';
// import { pipeList } from '../constants/data.js';


class PipeHeader extends Component {
  render() {
    const {status} = this.props;

    return (
      <div className="pipe-header">
        <div className="item">{status}</div>
      </div>
    );
  }
}

export default PipeHeader;
