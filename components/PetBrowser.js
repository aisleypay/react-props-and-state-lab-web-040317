const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        // <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {this.props.pets.map( (singlePet)=>{

          if (this.props.adoptedPets.includes(singlePet)){
            return  <Pet pet={singlePet} isAdopted="true" />
          } else {
            return  <Pet pet={singlePet} isAdopted="false" onAdoptPet={this.props.onAdoptPet} />
          }

        } )}
      </div>
    );
  }
}

module.exports = PetBrowser;
