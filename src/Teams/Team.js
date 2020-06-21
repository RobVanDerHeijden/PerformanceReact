import React from 'react';
import Button from '../components/button/button';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
      }

    componentDidMount() {
        fetch(`https://localhost:5001/api/v1.0/teams/${this.props.match.params.teamid}`, {
            method: 'GET',
            mode: 'cors'
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                team: json,
            })
        });
    }

    // handleSubmit(data) {
    //     fetch(`https://localhost:5001/api/v1.0/teams/${this.state.teamid}`, {
    //         method: 'PUT',
    //         mode: 'cors',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         return res;
    //     }).catch(err => err);
    // }
    
    handleSubmit(data) {
        console.log('form submission data', data);
    }

    render(){
        var { isLoaded, team } = this.state;
        if (!isLoaded) {
          return <div>Loading...</div>
        } else {
          return (
              <div>
                  <h2>Update [{team.id}] {team.tag} | {team.name}</h2>

                    <form onSubmit={this.handleSubmit}>
                        <label>Team Name</label>
                        <input type="text" defaultValue={team.name}></input>
                        
                        <label>Tag</label>
                        <input type="text" defaultValue={team.tag}></input>
                
                        {/* <button type="submit" >Update</button> */}
                        <Button label="Update me"></Button>
                    </form>
              </div>
            
            );
        }
    }

   
}

export default Team;
