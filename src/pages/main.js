import React, { Component } from 'react';
import './main.scss';
import _ from 'lodash';
import {pipeList} from '../constants/data.js';
import PipeHeader from "../components/PipeHeader";
import PipeItem from "../components/PipeItem";
import CategoryTab from "../components/CategoryTab";

class main extends Component {
  render() {
    const {history} = this.props;

    return (
      <div className="main">
        <CategoryTab/>
        <div className="pipe-line">
          {
            _.map(pipeList, item =>
              <div className="pipe-container">
                <PipeHeader status={item}/>
                <div className="pipe-body-wrapper">
                  <PipeItem status={item} history={history}/>
                </div>
              </div>)
          }
        </div>
      </div>
    );
  }
}

export default main;
