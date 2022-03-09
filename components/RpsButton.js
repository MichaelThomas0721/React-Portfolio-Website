export default function (props) {
  function test() {
    props.userInput.current = props.num;
    props.changeAiText();
  }

  return (
    <div>
      <button onClick={() => test()} className="rpsBtn">
        {props.value}
      </button>
    </div>
  );
}
