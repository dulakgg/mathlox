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
    <h2 className={`text-4xl font-bold ${className}`}>{children}</h2>
);

// eslint-disable-next-line react-refresh/only-export-components
export const SECTION_TEXT = ({ children, className = "" }: TitleProps) => (
    <div className={`text-xl font-light leading-relaxed ${className}`}>{children}</div>
);

// eslint-disable-next-line react-refresh/only-export-components
export const CARD = ({ children, className = "" }: CardProps) => (
    <section className={`w-3/4 p-[2%] rounded-4xl shadow-xl flex flex-col gap-0.5 border-8 border-gray-200 bg-gray-300 shadow-black mx-auto mt-10 mb-10 ${className}`}>{children}</section>
);
