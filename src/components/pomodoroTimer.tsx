import React from "react";
import useInterval from "../hooks/useInterval";

interface PomodoroProps {
  defaultPomodoroTime: number;
}

export default function Pomodoro(props: PomodoroProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Hello, world {mainTime}!</div>;
}
