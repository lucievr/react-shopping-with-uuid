import React from "react";
import ShoppingListForm from "./ShoppingListForm";
import uuidv4 from "uuid/v4";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Oranges", qty: 6, id: uuidv4() },
        { name: "Almond milk", qty: "1 litre", id: uuidv4() }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  addItem(item) {
    let newItem = { ...item, id: uuidv4() };
    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map(i => (
          <li key={i.id}>
            {i.name}: {i.qty}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
