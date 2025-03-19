const TodoList = (props) => {
    const {title, ...obj} = props;
    const items = obj.items;
    const CSSStyles = obj.myStyles;
    console.log(title);
    console.log(obj);
  console.log(CSSStyles);

  return (
    <div>
      {/* <h2 style={CSSStyles}>{title ? title : "Default Title"}</h2> */}
      <h2 style={CSSStyles}>{title || "Default Title"}</h2>
      <ul>
        {items.map((element, index) => (
          <li key="index">{element}</li>
        ))}
      </ul>
      {/* ---------------
      <ul>{listItems}</ul> */}
    </div>
  );
};

export default TodoList;
