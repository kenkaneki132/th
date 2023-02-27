import React, { useState } from "react";
import Startbuttons from "./Startbuttons";
import Bets from "./Bets";
import Historybuttons from "./Historybuttons";
import Timer from "./Timer";
import Results from "./Results";
import Grid from "./Grid";
import "./grid.css";

function Game() {
  const initialCount = 15;
  const intialmoney = 10000;
  const [startbuttonvalue, setstartbuttonvalue] = useState(false);
  var [counter, setCounter] = useState(initialCount);
  const [selectedvalues, setselectedvalues] = useState([]);
  const [treasure, setTreasure] = useState([]);
  const [playerAmount, setPlayerAmount] = useState(intialmoney);
  const [betselected, setbetselected] = useState(1);
  const [totalBetAmount, setTotalBetAmount] = useState(0);
  const [betReward, setBetReward] = useState(0);
  const [checkPlayerAmount, setCheckPlayerAmount] = useState(false);
  const [undoarray, setundoarray] = useState([]);
  const [repeatarray, setrepeatarray] = useState([]);
  const [temparray, settemparray] = useState([]);
  const [tempchiparray, settempchiparray] = useState([1]);
  const [lastchipvalue, setlastchipvalue] = useState(0);

  return (
    <div className="Game">
      <div className="Gameinfo">
        <div className="Playbuttons">
          <Startbuttons
            startbuttonvalue={startbuttonvalue}
            setstartbuttonvalue={setstartbuttonvalue}
            counter={counter}
            setCounter={setCounter}
            initialCount={initialCount}
            selectedvalues={selectedvalues}
            setselectedvalues={setselectedvalues}
            treasure={treasure}
            setTreasure={setTreasure}
            setbetselected={setbetselected}
            betReward={betReward}
            setPlayerAmount={setPlayerAmount}
            setBetReward={setBetReward}
            repeatarray={repeatarray}
            setrepeatarray={setrepeatarray}
            undoarray={undoarray}
            setundoarray={setundoarray}
            setlastchipvalue={setlastchipvalue}
            lastchipvalue={lastchipvalue}
            tempchiparray={tempchiparray}
            settempchiparray={settempchiparray}
          />
        </div>
        <div className="Grid">
          <Grid
            selectedvalues={selectedvalues}
            setselectedvalues={setselectedvalues}
            startbuttonvalue={startbuttonvalue}
            counter={counter}
            treasure={treasure}
            setTreasure={setTreasure}
            undoarray={undoarray}
            setundoarray={setundoarray}
          />
        </div>
        <div className="bets">
          <Bets
            betselected={betselected}
            setbetselected={setbetselected}
            startbuttonvalue={startbuttonvalue}
            totalBetAmount={totalBetAmount}
            setTotalBetAmount={setTotalBetAmount}
            selectedvalues={selectedvalues}
            undoarray={undoarray}
            setundoarray={setundoarray}
            tempchiparray={tempchiparray}
            settempchiparay={settempchiparray}
          />
        </div>
      </div>
      <div className="historybuttons">
        <Historybuttons
          undoarray={undoarray}
          setundoarray={setundoarray}
          selectedvalues={selectedvalues}
          setselectedvalues={setselectedvalues}
          startbuttonvalue={startbuttonvalue}
          counter={counter}
          betselected={betselected}
          setbetselected={setbetselected}
          repeatarray={repeatarray}
          temparray={temparray}
          settemparray={settemparray}
          tempchiparray={tempchiparray}
          settempchiparay={settempchiparray}
          lastchipvalue={lastchipvalue}
        />
      </div>
      <div className="timer">
        <Timer
          counter={counter}
          initialCount={initialCount}
          startbuttonvalue={startbuttonvalue}
        />
      </div>
      <div className="Gameresults">
        <Results
          selectedvalues={selectedvalues}
          treasure={treasure}
          playerAmount={playerAmount}
          setPlayerAmount={setPlayerAmount}
          betReward={betReward}
          setBetReward={setBetReward}
          totalBetAmount={totalBetAmount}
          counter={counter}
          checkPlayerAmount={checkPlayerAmount}
          setCheckPlayerAmount={setCheckPlayerAmount}
          setTotalBetAmount={setTotalBetAmount}
          betselected={betselected}
        />
      </div>
    </div>
  );
}

export default Game;
