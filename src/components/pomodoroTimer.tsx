import React, { useEffect } from "react";
import useInterval from "../hooks/useInterval";
import Button from "./button";
import Timer from "./timer";

interface PomodoroProps {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export default function Pomodoro(props: PomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add("working");
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Init" onClick={() => configureWork()}></Button>
        <Button text="teste" onClick={() => console.log(1)}></Button>
        <Button text={timeCounting ? "Pause" : "Play"} onClick={() => setTimeCounting(!timeCounting)}></Button>
      </div>

      <div className="details">
        <p>Testando</p>
        <p>Testando</p>
        <p>Testando</p>
        <p>Testando</p>
        <p>Testando</p>
        <p>Testando</p>
      </div>
    </div>
  );
}
