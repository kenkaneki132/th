import { useEffect } from "react";

function Results(props) {
  const selectedvalues = props.selectedvalues;
  const treasure = props.treasure;
  const playerAmount = props.playerAmount;
  const setPlayerAmount = props.setPlayerAmount;
  const totalBetAmount = props.totalBetAmount;
  const betReward = props.betReward;
  const setBetReward = props.setBetReward;
  const counter = props.counter;
  const setTotalBetAmount = props.setTotalBetAmount;
  const betselected = props.betselected;
  let answer = selectedvalues.filter((e) => treasure.includes(e));
  if (answer.length > 0) {
    setBetReward(
      (betReward) => (betReward = totalBetAmount * (answer.length + 1))
    );
  } else if (counter === 0) {
    setBetReward(-totalBetAmount);
  }

  useEffect(() => {
    if (betReward > 0) {
      setPlayerAmount(
        (PlayerAmount) =>
          (PlayerAmount = PlayerAmount - totalBetAmount + betReward)
      );
    } else if (betReward < 0) {
      setPlayerAmount(
        (PlayerAmount) => (PlayerAmount = PlayerAmount + betReward)
      );
    } else {
      setTotalBetAmount(() => betselected * selectedvalues.length);
    }
  }, [betReward, totalBetAmount]);

  return (
    <>
      <div>Reward : {betReward}</div>
      <div>
        Balance : {counter > 0 ? playerAmount - totalBetAmount : playerAmount}
      </div>
      <div>
        Result :{" "}
        {answer.length > 0 && treasure.length > 0
          ? "won"
          : treasure.length > 0
          ? "lost"
          : " "}
      </div>
    </>
  );
}
export default Results;
