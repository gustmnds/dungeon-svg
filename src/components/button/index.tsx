import { buttonVariants } from "./button.css";


export type UIButtonProps = {
  text: string;
  onClick?: () => void;
  variants?: "default" | "outline"
  disabled?: boolean
  children?: never[];
};

export function UIButton({
  text,
  variants = "default",
  onClick,
  disabled
}: UIButtonProps) {

  const handleClick = () => onClick && onClick();

  return (
    <button
      className={buttonVariants[variants]}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
