const Startbuttons = (props) => {
  const setstartbuttonvalue = props.setstartbuttonvalue;
  const startbuttonvalue = props.startbuttonvalue;
  // const {startbuttonvalue} = props;
  var counter = props.counter;
  const setCounter = props.setCounter;
  const initialCount = props.initialCount;
  const selectedvalues = props.selectedvalues;
  const setselectedvalues = props.setselectedvalues;
  // const treasure = props.treasure;
  const setTreasure = props.setTreasure;
  const setbetselected = props.setbetselected;
  const setPlayerAmount = props.setPlayerAmount;
  // const betReward = props.betReward;
  const setBetReward = props.setBetReward;
  // const repeatarray = props.repeatarray;
  const setrepeatarray = props.setrepeatarray;
  // const undoarray = props.undoarray;
  const setundoarray = props.setundoarray;
  const setlastchipvalue = props.setlastchipvalue;
  // const lastchipvalue = props.lastchipvalue;
  const tempchiparray = props.tempchiparray;
  const settempchiparray = props.settempchiparray;
  function settingstartbuttonvalue() {
    if (startbuttonvalue === false) {
      setstartbuttonvalue(() => !startbuttonvalue);
      let interval = initialCount;
      if (counter >= 0) {
        interval = setInterval(() => {
          counter--;
          setCounter(() => counter);

          console.log("counter :>> ", counter);

          if (counter === 0) {
            setCounter((counter) => counter);

            for (let j = 0; j < 5; j++) {
              setTreasure(
                (treasure) =>
                  (treasure = [...treasure, Math.floor(Math.random() * 48) + 1])
              );
            }
            clearInterval(interval);
          }
        }, 1000);
      }
    }
  }

  function settingresetvalue() {
    if (startbuttonvalue === true && counter === 0) {
      setstartbuttonvalue(() => !startbuttonvalue);
      setCounter((counter) => (counter = initialCount));
      setrepeatarray((repeatarray) => (repeatarray = selectedvalues));
      setselectedvalues((selectedvalues) => (selectedvalues = []));
      setTreasure((treasure) => (treasure = []));

      setBetReward(() => 0);
      setundoarray((undoarray) => (undoarray = []));
      if (tempchiparray[tempchiparray.length - 1] > 0) {
        setlastchipvalue(
          (lastchipvalue) =>
            (lastchipvalue = tempchiparray[tempchiparray.length - 1])
        );
      }
      settempchiparray((tempchiparray) => (tempchiparray = []));
    }
  }
  function settingnewgame() {
    settingresetvalue();
    setbetselected((betselected) => (betselected = 1));
    setPlayerAmount((e) => (e = 10000));
  }
  // console.log("Treasure =>", treasure);
  // console.log(selectedvalues);
  return (
    <>
      <button className="startbutton" onClick={() => settingstartbuttonvalue()}>
        start
      </button>
      <button className="resetbutton" onClick={() => settingresetvalue()}>
        reset
      </button>
      <button className="newgamebutton" onClick={() => settingnewgame()}>
        newgame
      </button>
    </>
  );
};
export default Startbuttons;
