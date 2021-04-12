import "./button.css";

function Button(props) {
  function getData() {
    props.fetchData();
  }
  return (
    <div>
      <button onClick={getData}>Go</button>
    </div>
  );
}
export default Button;
