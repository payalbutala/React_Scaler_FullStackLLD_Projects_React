import { useState } from "react";

const TodoListInputButton = () => {
  const [items, setItems] = useState([
    "List Item 1",
    "List Item 2",
    "List Item 3",
    "List Item 4",
    "List Item 5",
    "List Item 6",
  ]);

  const [newItem, setNewItem] = useState('');

  const onHandleChangeUpdateItemName = (e) => {
    // console.log(e.target.value);
    setNewItem(e.target.value);
  }

  const onHandleClickAddItem = () => {
    // console.log(newItem);
    // console.log(items);
    const newItems = [...items, newItem]
    setItems(newItems);
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <h2 style={{ color: "darkViolet" }}>ToDo App with Add Item</h2>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <input placeholder="Enter Item to add to List : " onChange={onHandleChangeUpdateItemName}/>
      <button onClick={onHandleClickAddItem}>Add Item</button>
    </div>
  );
};

export default TodoListInputButton;
