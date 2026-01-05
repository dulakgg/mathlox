import type { ReactNode } from "react";

type TitleProps = {
    children: ReactNode;
    className?: string;
};

type CardProps = {
    children: ReactNode;
    className?: string;
}

export const TITLE = ({ children, className = "" }: TitleProps) => (
    <h1 className={`text-5xl font-extrabold ${className}`}>{children}</h1>
);

// eslint-disable-next-line react-refresh/only-export-components
export const SECTION_TITLE = ({ children, className = "" }: TitleProps) => (
    <h2 className={`text-3xl font-bold ${className}`}>{children}</h2>
);

// eslint-disable-next-line react-refresh/only-export-components
export const SECTION_TEXT = ({ children, className = "" }: TitleProps) => (
    <h3 className={`text-1xl font-light ${className}`}>{children}</h3>
);

// eslint-disable-next-line react-refresh/only-export-components
export const CARD = ({ children, className = "" }: CardProps) => (
    <section className={`w-3/4 p-[2%] rounded-4xl shadow-xl flex flex-col items-center gap-0.5 border-8 border-l-black rounded-l-none border-gray-200 bg-gray-300 shadow-black mx-auto mt-10 mb-10 ${className}`}>{children}</section>
);
