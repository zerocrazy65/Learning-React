import Item from "./Item";
import "./Transaction.css";

const Transection = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          // return <Item {...element} key={uuidv4()} />;
          return <Item {...element} key={element.id} />;
        })}
      </ul>
    </div>
  );
};
export default Transection;
