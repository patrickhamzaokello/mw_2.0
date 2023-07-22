import {forwardRef} from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>{};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) =>{
    return (
        <button
        type = {type}
        className={twMerge(`
        w-full
        rounded-full
        bg-purple-500
        border-transparent
        px-5
        py-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-black
        font-bold
        hover:opacity-75
        transition

        `, className)}
        >
        {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button;
