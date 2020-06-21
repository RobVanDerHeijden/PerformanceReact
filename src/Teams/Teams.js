import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Team from './Team';
import AddTeam from './AddTeam';

class Teams extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
  }

  // deleteTodo(id){
  //   fetch('https://localhost:5001/api/v1.0/teams' + id, {
  //       method: 'DELETE',
  //       mode: 'CORS'
  //   }).then(res => res)
  // }

  componentDidMount() {
    fetch('https://localhost:5001/api/v1.0/teams')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        teams: json,
      })
    });
  }
  render(){
    var { isLoaded, teams } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="main-body-inside">
          <h3>Teams</h3>
          <Link to={"/addteam"}><button type="button" className="add-new-button">+ Add new</button></Link>
          
          <table className="team-list-table">
            <thead>
              <tr className="team-list-table-header">
                <th>#</th>
                <th>Tag</th>
                <th>Name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teams.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.tag}</td>
                  <td>{item.name}</td>
                  <td><Link to={"/teams/" + item.id}>Edit</Link></td>
                  <td><Link to={"/teams/delete/" + item.id}>Delete</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
            <Router>
              <Switch>
                <Route path='/teams/:teamid' component={Team} />
                <Route path='/addteam' component={AddTeam} />
              </Switch>
            </Router>
        </div>
        );
    }
  }
}

export default Teams;
