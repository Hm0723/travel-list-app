import { useState } from "react";

export default function Form({ handleAddItems }) {
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
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
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