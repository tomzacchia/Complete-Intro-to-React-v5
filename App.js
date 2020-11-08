const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "CeeCee"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Black Cur"),
  ]);
};

const App = () => {
  // React.createElement( type, [props],[...children])
  return React.createElement("div", { id: "unique_id" }, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
