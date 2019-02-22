import React, {Component} from 'react';
import './teamHome.scss';
import _ from 'lodash';
import {teams} from "../constants/data";

class teamHome extends Component {
  state = {
    teams: teams,
    activeId: '',
  };

  componentWillMount() {
    const {match} = this.props;
    const currentTeams = _.filter(teams,team=> match.params.name===team.name);

    this.setState({
      team: currentTeams,
      activeId: match.params.id
    });
  }

  render() {
    const {match,history} = this.props;
    const currentTeams = _.filter(teams,team=> match.params.name===team.name);
    const teamColor = currentTeams[0].color;

    return (
      <div className="teamHome">
        <div className="team-home-header">
          <div className="team-name" style={{backgroundColor: teamColor}}>{match.params.name || "팀 홈 페이지 입니다"}</div>
          <button className="team-home-btn" onClick={()=>{history.push("/")}}>Main</button>
        </div>

        <div className="team-home-body">
          <div className="team-home-list">
            <div className="team-home-list-header">
              History
            </div>
            {_.map(currentTeams,team => <div className={this.state.activeId===team.id ? "note active" : "note"} onClick={()=>{
              this.setState({
                activeId: team.id
              })
            }}>{`[${team.status}] ${team.notes}`}</div>)}
          </div>
          {_.filter(currentTeams,team => team.id===this.state.activeId)
            .map(item =>
              <div className="team-home-note">
                <div className="note-status">{item.status}</div>
                <textarea className="note" value={item.notes} onChange={e=>{
                  const teams = [...this.state.teams];
                  const team = _.find(teams, note => note.id===this.state.activeId);

                  team.notes=e.target.value;

                  this.setState({
                    teams: teams
                  })
                }}/>
              </div>)}
        </div>
      </div>
    )
  }
}

export default teamHome;