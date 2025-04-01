"use client";

import { Button as ButtonAntd, ButtonProps as ButtonAntdProps } from "antd";
import { notoFont } from "@/app/ui/fonts";

interface ButtonProps extends ButtonAntdProps {
    styling: "primary" | "secondary" | "tertiary";
    className?: string;
}

const types = {
    "primary": "!bg-indigo-700 hover:!bg-indigo-800 text-white border-none !shadow-none",
    "secondary": "bg-secondary text-white !border !border-neutral-200 !text-neutral-900 hover:!bg-neutral-50 !bg-white shadow-md",
    "tertiary": "!bg-red-500 hover:!red-700 text-white border-none !shadow-none",
}


const Button = ({ content, className, styling, ...props }: ButtonProps) => {
    return <ButtonAntd
        {...props}
        type="primary"
        className={`!text-center !h-auto !font-medium !text-base !rounded !px-4 !py-[9px] ${notoFont.className} ${className} ${types?.[styling] ?? ""}`}
    >
        {content}
    </ButtonAntd>;
}

export default Button;