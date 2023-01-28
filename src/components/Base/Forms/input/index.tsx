import cs from "classnames";
import { InputHTMLAttributes } from "react";

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    React.PropsWithChildren {
  variant?: "primary" | "secondary" | "info";
}

const { BaseTheme, PrimaryTheme } = {
  BaseTheme:
    "bg-gray-300 p-1 rounded-md w-full placeholder:p-2 placeholder:text-sm outline-none border-none",
  PrimaryTheme: "bg-red",
};

const Input: React.FunctionComponent<IInputProps> = (props): JSX.Element => {
  switch (props.variant) {
    case "primary":
      return <input className={cs(BaseTheme, PrimaryTheme)} {...props} />;

    case "secondary":
      return <input className={cs(BaseTheme)} {...props} />;

    case "info":
      return <input className={cs(BaseTheme)} {...props} />;

    default:
      return <input className={cs(BaseTheme)} {...props} />;
  }
};

export default Input;
