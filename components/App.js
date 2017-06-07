import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.handleAdoptPet = this.handleAdoptPet.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.getPets = this.getPets.bind(this)
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    })
  }

  handleChangeType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: type,})
    })
  }

  getPets() {
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url) // returns a promise so use .then
      .then(response => response.json())
      .then(petList => this.setState({ petList }));
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={ this.state.filters } onChangeType={ this.handleChangeType } onFindPetsClick={ this.getPets }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } adoptedPets={ this.state.adoptedPets } onAdoptPet={ this.handleAdoptPet }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
