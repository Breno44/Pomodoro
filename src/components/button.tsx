interface buttonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function button(props: buttonProps): JSX.Element {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
