function Bets(props) {
  const betselected = props.betselected;
  const setbetselected = props.setbetselected;
  const startbuttonvalue = props.startbuttonvalue;
  const totalBetAmount = props.totalBetAmount;
  const setTotalBetAmount = props.setTotalBetAmount;
  const selectedvalues = props.selectedvalues;
  // const undoarray = props.undoarray;
  const setundoarray = props.setundoarray;
  // const tempchiparray = props.tempchiparray;
  const settempchiparay = props.settempchiparay;
  function changehandleChipClick(i, e) {
    if (startbuttonvalue) {
      setbetselected((betselected) => (betselected = i));
    }
  }
  function handleChipClick(i, e) {
    setundoarray((undoarray) => (undoarray = [...undoarray, [i, "chip"]]));
    settempchiparay((tempchiparray) => (tempchiparray = [...tempchiparray, i]));
    changehandleChipClick(i, e);
  }
  // function clearbetAmount() {
  //   setbetselected((betselected) => (betselected = 1));
  // }
  setTotalBetAmount(() => betselected * selectedvalues.length);
  //
  return (
    <>
      {/* <button className="clearBetAmountbutton" onClick={clearbetAmount}>
        {" "}
        Clear Bet Amount
      </button> */}
      <div className="chips">
        <img
          src={require("./images/chip1.png")}
          id="1c"
          alt="chipvalue1"
          className={betselected === 1 ? "chipselected" : "chip"}
          onClick={(e) => handleChipClick(1, e)}
        ></img>
        <img
          src={require("./images/chip2.png")}
          id="5c"
          alt="chipvalue5"
          className={betselected === 5 ? "chipselected" : "chip"}
          onClick={(e) => handleChipClick(5, e)}
        ></img>
        <img
          src={require("./images/chip3.png")}
          id="10c"
          alt="chipvalue10"
          className={betselected === 10 ? "chipselected" : "chip"}
          onClick={(e) => handleChipClick(10, e)}
        ></img>
        <img
          src={require("./images/chip4.png")}
          id="20c"
          alt="chipvalue20"
          className={betselected === 20 ? "chipselected" : "chip"}
          onClick={(e) => handleChipClick(20, e)}
        ></img>
        <img
          src={require("./images/chip5.png")}
          id="25c"
          alt="chipvalue25"
          className={betselected === 25 ? "chipselected" : "chip"}
          onClick={(e) => handleChipClick(25, e)}
        ></img>
      </div>
      <div className="betAmount">
        <div>chip :{betselected}</div>
        <div>bet : {totalBetAmount}</div>
      </div>
    </>
  );
}
export default Bets;
