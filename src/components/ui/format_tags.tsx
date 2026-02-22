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
    <h1 className={`text-4xl md:text-5xl font-extrabold ${className}`}>{children}</h1>
);

// eslint-disable-next-line react-refresh/only-export-components
export const SECTION_TITLE = ({ children, className = "" }: TitleProps) => (
    <h2 className={`text-3xl md:text-4xl font-bold ${className}`}>{children}</h2>
);

// eslint-disable-next-line react-refresh/only-export-components
export const SECTION_TEXT = ({ children, className = "" }: TitleProps) => (
    <div className={`text-l md:text-xl font-light leading-relaxed ${className}`}>{children}</div>
);

export const CARD = ({ children, className = "" }: CardProps) => (
    <section className={`w-full md:w-3/4 p-[2%] rounded-4xl shadow-xl flex flex-col gap-0.5 border-t-8 border-b-8 md:border-8 md:border-gray-200 bg-gray-300 shadow-black mx-auto mt-10 mb-10 ${className}`}>{children}</section>
);
