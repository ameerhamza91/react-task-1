import "./button.css";

const Button = (props) => {
  const getData = () => {
    props.fetchData();
  }
  return (
    <div>
      <button onClick={getData}>Go</button>
    </div>
  );
}
export default Button;
