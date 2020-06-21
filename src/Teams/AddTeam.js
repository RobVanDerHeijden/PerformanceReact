import React from 'react';
import axios from 'axios';
import Button from '../components/button/button';

class AddTeam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: 'Name',
            Tag: 'Tag'
          };
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log("new value", event.target.value, "asd");
    }

    handleChange(event) {
        console.log("new value", event.target.value);
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.Name);
        const data = {
            Name: this.state.Name,
            Tag: this.state.Tag
          };
        axios.post("https://localhost:5001/api/v1.0/teams", { 
            Name: data.Name, 
            Tag: data.Tag })
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
        event.preventDefault();
    }

    render(){
        return (
            <div>
                  <h2>Add team</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Team Name</label>
                        <input name="Name" type="text" checked={this.state.isGoing} onChange={this.handleInputChange} defaultValue="Name"></input>
                        <label>Tag</label>
                        <input name="Tag" type="text" checked={this.state.isGoing} onChange={this.handleInputChange}  defaultValue="Tag"></input>
                        <Button label="Create me"></Button>
                    </form>
              </div>
        );
    }
}

export default AddTeam;