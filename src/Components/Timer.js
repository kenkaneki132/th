function Timer(props) {
  const timer = props.counter;
  // const initialCount = props.initialCount;
  const startbuttonvalue = props.startbuttonvalue;
  // let widthPart = (timer / initialCount) * 100;
  return (
    <>
      {startbuttonvalue && timer > 0 ? (
        <div className="Countdown">
          <div
            className={
              timer > 4
                ? "Progressbar Progressbarcolor"
                : "Progressbar Progressbarendcolor"
            }
          >
            <span className="spantime">{timer}</span>
          </div>
        </div>
      ) : (
        <div className="Countdown" style={{ visibility: "hidden" }}>
          Countdown :{" "}
        </div>
      )}
    </>
  );
}
export default Timer;
//width: `${widthPart}%`
