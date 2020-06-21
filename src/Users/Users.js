import React from 'react';

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/v1.0/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }
  render(){
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        // <p>loaded!!</p>
        <div className="user-list">
          <h3>Teams</h3>
          <table className="">
            {items.map(item => (
              <tr key={item.id}>
                <td>Name: {item.name}</td>
                <td>Email: {item.email}</td>
              </tr>

            ))}
          </table>


          
        </div>
        );
    }

  }

  

}
// function Users() {

//   return (
//     <div className="Users-class">
//       <h1>
//         Welcome to Drafter
//       </h1>
//       <p>
//         Users-list: 
//       </p>
//     </div>
//   );
// }

export default Users;
