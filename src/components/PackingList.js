import Item from "./Item";

export default function PackingList({ items, handleTogglePacked, handleDeleteItem, handleDeleteAll }) {
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
        <button
        onClick={handleDeleteAll}
        style={{
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >Delete All</button>
      </div>
    );
  }