import { useState } from "react";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: Number(quantity),
      packed: false,
    };

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, handleTogglePacked, handleDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleTogglePacked={handleTogglePacked}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleTogglePacked, handleDeleteItem }) {
  return (
    <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
      ({item.quantity}) {item.description}
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleTogglePacked(item.id)}
      />
       <button
        onClick={() => handleDeleteItem(item.id)}
        style={{
          padding: "5px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginLeft: "10px", 
        }}
      >
        Delete
      </button>
    </li>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>You have {totalItems} items in the list. You already packed {packedItems} ({percentage}%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} handleTogglePacked={handleTogglePacked} handleDeleteItem={handleDeleteItem} />
      <Stats items={items} />
    </div>
  );
}

export default App;
