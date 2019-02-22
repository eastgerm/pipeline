import React, {Component} from 'react';
import './teamHome.scss';
import _ from 'lodash';
import {teams} from "../constants/data";

class teamHome extends Component {
  render() {
    const {match,history} = this.props;
    const currentTeams = _.filter(teams,team=> match.params.name===team.name);
    const teamColor = currentTeams[0].color;

    return (
      <div className="teamHome">
        <div className="team-name" style={{backgroundColor: teamColor}}>{match.params.name || "팀 홈 페이지 입니다"}</div>
        <div className="team-notes">
          {_.map(currentTeams,team => <div className="notes">{team.notes}</div>)}
        </div>
        <button onClick={()=>{history.push("/")}}>Main</button>
      </div>
    )
  }
}

export default teamHome;