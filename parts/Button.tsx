import clsx from 'clsx';
import Image from "next/image";
import BlurArrow from "../public/assets/blue-button.svg";

interface ButtonProps {
    className?: string;
    variant?: "primary" | "secondary" | "tertiary";
    title?: string;
}

const Button = ({className, variant, title}: ButtonProps) => {
    const buttonClasses = clsx(
        "w-fit px-8 py-[16px] rounded-md font-medium text-[16px] flex items-center justify-center",
        {
            "bg-[#4328EB] text-white": variant === "primary",
            "bg-[#FFFFFF]  text-[#4328EB]": variant === "secondary"
        },
        className
    );

    return (
        <button
            className={buttonClasses}
        >
            {title}
            {variant === "secondary" && <Image src={BlurArrow} className="ml-3 w-6 h-6" alt="Arrow Icon"/>}
        </button>
    );
};

export default Button;