import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    SuperHeroi: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');

    this.setState({ SuperHeroi: response.data });
  }

  render() {

    const { SuperHeroi } = this.state;

    return (
      <div>
        <h1>Listar os SuperHeroi</h1>
        {SuperHeroi.map(SuperHeroi => (
          <li key={SuperHeroi.show.id}>
            <h2>
              <strong>Título: </strong>
              {SuperHeroi.show.name}
            </h2>
            <p>
              {SuperHeroi.show.url}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default App;
