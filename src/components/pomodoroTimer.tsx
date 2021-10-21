import React from "react";
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

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="teste" onClick={() => console.log(1)}></Button>
        <Button text="teste" onClick={() => console.log(1)}></Button>
        <Button text="teste" onClick={() => console.log(1)}></Button>
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
