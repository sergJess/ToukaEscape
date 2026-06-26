import styles from "./button.module.css";
type ButtonProps = {
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};
export function Button({
  text,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const combinedClasses = `${styles.start} ${className}`.trim();
  return (
    <button onClick={onClick} type={type} className={combinedClasses}>
      {text}
    </button>
  );
}
