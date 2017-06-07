const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map( (singlePet)=> {
          return <Pet pet={singlePet} isAdopted={this.props.adoptedPets.includes(singlePet.id)} onAdoptPet={this.props.onAdoptPet} />
        } )}
      </div>
    );
  }
}

module.exports = PetBrowser;
