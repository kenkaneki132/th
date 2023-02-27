function Grid(props) {
  const selectedvalues = props.selectedvalues;
  const setselectedvalues = props.setselectedvalues;
  const startbuttonvalue = props.startbuttonvalue;
  const treasure = props.treasure;
  // const undoarray = props.undoarray;
  const setundoarray = props.setundoarray;
  //   const setTreasure = props.setTreasure;

  //   const startbuttonvalue = props.startbuttonvalue;
  const counter = props.counter;
  function changehandleclick(i) {
    if (counter <= 15 && startbuttonvalue) {
      if (selectedvalues.includes(i) && counter > 0) {
        setselectedvalues((selectedvalues) =>
          selectedvalues.filter((d) => d !== i)
        );
      } else if (
        !selectedvalues.includes(i) &&
        counter > 0 &&
        selectedvalues.length < 6
      ) {
        setselectedvalues(
          (selectedvalues) => (selectedvalues = [...selectedvalues, i])
        );
      }
    }
  }
  function handleClick(i) {
    changehandleclick(i);
    setundoarray((undoarray) => (undoarray = [...undoarray, [i, "grid"]]));
  }

  var indents = [];
  for (let i = 1; i <= 48; i++) {
    indents.push(
      <div
        key={i}
        className={
          selectedvalues.includes(i) && treasure.includes(i)
            ? "selectedtreasureitem"
            : treasure.includes(i)
            ? "treasureitem"
            : selectedvalues.includes(i)
            ? "selectedGriditem"
            : "Griditem"
        }
        onClick={(e) => handleClick(i)}
      >
        {i}
      </div>
    );
  }
  return indents;
}
export default Grid;
