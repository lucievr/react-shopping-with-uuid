import React from "react";

class ShoppingListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      qty: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="qty">Quantity: </label>
        <input
          id="qty"
          name="qty"
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button>Add Item!</button>
      </form>
    );
  }
}

export default ShoppingListForm;
