const Hello = (props) => {

// POINT propsは読み取り専用->書き換え不可
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;