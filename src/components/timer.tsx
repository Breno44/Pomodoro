import secondsToMinutes from "../utils/secondsToMinutes";

interface timerProps {
  mainTime: number;
}

export default function timer(props: timerProps): JSX.Element {
  return <div className="timer">{secondsToMinutes(props.mainTime)}</div>;
}
