import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import PackedStats from "./Components/PackedStats";
import PackingList from "./Components/PackingList";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleitem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header></Header>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItems}
        onToggleitem={handleToggleitem}
        onClearList={handleClearList}
      ></PackingList>
      <PackedStats items={items}></PackedStats>
    </div>
  );
}

export default App;
