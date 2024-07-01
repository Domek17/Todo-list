import { useState } from "react";
import ListItem from "./ListItem";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleitem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "alphabetically")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => b.packed - a.packed);
  if (sortBy === "quantity")
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleitem={onToggleitem}
          />
        ))}
      </ul>

      {items.length > 0 && (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="alphabetically">Sort by alphabetically</option>
            <option value="packed">Sort by packed status</option>
            <option value="quantity">Sort by quantity</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      )}
    </div>
  );
}
