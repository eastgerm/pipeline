import React, { Component } from 'react';
import './PipeItem.scss';
import {teams} from "../constants/data";
import _ from "lodash";

class PipeItem extends Component {
  render() {
    const {status,history} =this.props;

    return (
      <div className="pipe-item">
        {
          _.filter(teams, team => team.status === status)
          .map(item =>
            <div className="notes" onClick={()=>history.push(`/teamHome/${item.name}/${item.id}`)}>
              {item.notes}
              <div className="team-label" style={{backgroundColor: item.color}}>{item.name}</div>
            </div>)
        }
      </div>
    );
  }
}

export default PipeItem;
