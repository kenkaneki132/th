function Historybuttons(props) {
  const undoarray = props.undoarray;
  const setundoarray = props.setundoarray;
  const selectedvalues = props.selectedvalues;
  const setselectedvalues = props.setselectedvalues;
  const startbuttonvalue = props.startbuttonvalue;
  // const betselected = props.betselected;
  const setbetselected = props.setbetselected;
  const repeatarray = props.repeatarray;
  const temparray = props.temparray;
  const settemparray = props.settemparray;
  // const treasure = props.treasure;
  const tempchiparray = props.tempchiparray;
  // const settempchiparay = props.settempchiparay;
  const counter = props.counter;
  const lastchipvalue = props.lastchipvalue;
  function undochangehandleclick(i) {
    if (counter <= 15 && startbuttonvalue) {
      // console.log("hello");
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
  function undochangehandleChipClick(i) {
    if (startbuttonvalue) {
      setbetselected((betselected) => (betselected = i));
    }
  }
  // console.log(undoarray);
  function handleundo() {
    // let currentundoobject = undoarray[undoarray.length - 1];
    // console.log("Bye", undoarray);
    // if (undoarray.length >= 1) {
    //   setundoarray(() => undoarray.pop());
    //   if (currentundoobject[1] === "grid") {
    //     undochangehandleclick(currentundoobject[0]);
    //   }
    // }
    if (undoarray.length >= 1 && counter > 0) {
      let element = undoarray.pop();
      console.log(element);
      if (element[1] === "grid") {
        // console.log(...undoarray);
        undochangehandleclick(element[0]);
      } else if (element[1] === "chip") {
        tempchiparray.pop();
        let dummy = tempchiparray[tempchiparray.length - 1];
        console.log("Dummy is :", dummy);
        undochangehandleChipClick(dummy);
      } else if (element[1] === "repeat") {
        setselectedvalues(
          (selectedvalues) => (selectedvalues = temparray.pop())
        );
        
      }
    }
    // if (undoarray.length === 0) {
    //   setbetselected((betselected) => betselected === 1);
    // }
  }
  function handlerepeat() {
    if (repeatarray.length > 0 && startbuttonvalue) {
      setundoarray(
        (undoarray) => (undoarray = [...undoarray, [repeatarray, "repeat"]])
      );

      settemparray((temparray) => (temparray = [...temparray, selectedvalues]));
      setbetselected(() => lastchipvalue);
      setselectedvalues((selectedvalues) => (selectedvalues = repeatarray));
    }
  }
  // console.log(selectedvalues);
  return (
    <>
      <button className="undobutton" onClick={() => handleundo()}>
        UNDO
      </button>

      {repeatarray.length > 0 && selectedvalues !== repeatarray && (
        <button className="redobutton" onClick={() => handlerepeat()}>
          REPEAT
        </button>
      )}
    </>
  );
}
export default Historybuttons;
