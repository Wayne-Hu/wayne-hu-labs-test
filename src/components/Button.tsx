import clsx from "classnames";

type Props = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ label, disabled, onClick }: Props) => {
  return (
    <button
      className={clsx("bg-blue-400", " text-white", "p-2", "rounded-md", {
        "bg-zinc-400": disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
