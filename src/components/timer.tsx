import secondsToTime from "../utils/secondsToTime";

interface timerProps {
  mainTime: number;
}

export default function timer(props: timerProps): JSX.Element {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}
