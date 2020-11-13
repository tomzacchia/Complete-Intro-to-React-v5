import React from "react";
import { default as petApi } from "@frontendmasters/pet";

class Details extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //   };
  // }

  // this is a style choice, instead of calling construtor and super
  state = { loading: true };

  // only runs once during component creation
  componentDidMount() {
    // we have to use arrow functions in this case because
    // normal functions are envoked by something that is not Details
    petApi.animal(this.props.id).then(({ animal }) => {
      // this.setState is a shallow merge deep levels are overwritten
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1> loading ...</h1>;
    }

    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1> {animal}</h1>
          <h2> {`${animal} - ${breed} - ${location}`}</h2>
          <button> Adopt {name}</button>
          <p> {description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
