export default function Item({ item, handleTogglePacked, handleDeleteItem }) {
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