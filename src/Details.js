import React from "react";
import { default as petApi } from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    // testing error boundary
    // throw new Error("This is an error");

    petApi.animal(this.props.id).then(({ animal }) => {
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

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1> {name}</h1>
          <h2> {`${animal} - ${breed} - ${location}`}</h2>
          <button> Adopt {name}</button>
          <p> {description}</p>
        </div>
      </div>
    );
  }
}

/* 
  We can wrap the entire markup inside the return of render()
  however ErrorBoundary only catches the errors of its children
  therefore any errors in Details would be missed. that is why 
  we use the HOC pattern
*/
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
      {/* Equivalent: <Details id={props.id} ... /> */}
    </ErrorBoundary>
  );
}
