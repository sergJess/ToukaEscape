import styles from "./button.module.css";
type ButtonProps = {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};
export function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} type={props.type || "button"}>
      {props.text}
    </button>
  );
}
