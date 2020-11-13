import React from "react";
import { default as PetAPI } from "@frontendmasters/pet";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  // only runs once during component creation
  componentDidMount() {
    // we have to use arrow functions in this case because
    // normal functions are envoked by something that is not Details
    PetAPI.animal(this.props.id).then(({ animal }) => {
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
    return <h1> Hi </h1>;
  }
}

export default Details;
