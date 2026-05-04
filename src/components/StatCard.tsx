import { ReactNode } from "react";

interface StatCardProps {
    title?: string;
    children?: ReactNode;
    fullwidth?: boolean;
    className?: string;
}

export default function StatCard ({
    title,
    children,
    fullwidth = false,
    className = ""
}: StatCardProps) {
    return (
        <div className={`bg-white p-6 rounded shadow ${fullwidth ? "w-full" : "w-auto"} ${className}`}>
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            {children}
        </div>
    )
}