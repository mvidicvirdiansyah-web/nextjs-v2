"use client";

import { useState } from "react";
import Link from "next/link";

type Icon = {
    name: string;
    col: number;
    row: number;
    offsetX: number;
    offsetY: number;
    color: string;
}

export default function SpritePage() {
    const [hoveredIcon, setHoverIcon] = useState<String | null>(null);
    const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);

    const sosialIcons: Icon[] = [
        {name: "facebook", col: 0, row: 0, offsetX: 45, offsetY: 45, color: "#1877F2"},
        {name: "twitter", col: 1, row: 0, offsetX: 20, offsetY: 45, color: "#1DA1F2"},
        {name: "instagram", col: 2, row: 0, offsetX: -5, offsetY: 45, color: "#E4405F"},
        {name: "skype", col: 3, row: 0, offsetX: -25, offsetY: 45, color: "#00AFF0"},
        {name: "whatsapp", col: 0, row: 1, offsetX: 45, offsetY: 20, color: "#25D366"},
        {name: "pinterest", col: 1, row: 1, offsetX: 20, offsetY: 20, color: "#E60023"},
        {name: "Dribbble", col: 2, row: 1, offsetX: -5, offsetY: 20, color: "#EA4C89"},
        {name: "behance", col: 3, row: 1, offsetX: -25, offsetY: 20, color: "#1769FF"},
        {name: "linkedin", col: 0, row: 2, offsetX: 45, offsetY: 0, color: "#0077B5"},
        {name: "google", col: 1, row: 2, offsetX: 20, offsetY: 0, color: "#DB4437"},
        {name: "snapchat", col: 2, row: 2, offsetX: -5, offsetY: 0, color: "#FFFC00"},
        {name: "vimeo", col: 3, row: 2, offsetX: -25, offsetY: 0, color: "#1AB7EA"},
        {name: "youtube", col: 0, row: 3, offsetX: 45, offsetY: -20, color: "#FF0000"},
        {name: "Messenger", col: 1, row: 3, offsetX: 20, offsetY: -20, color: "#0084FF"},
        {name: "codepen", col: 2, row: 3, offsetX: -5, offsetY: -20, color: "#000000"},
        {name: "RSS", col: 3, row: 3, offsetX: -25, offsetY: -20, color: "#FFA500"},
    ];

    const iconSize = 100;
    const displaySize = 80;
    const previewSize = 200;

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
            <Link href="/" className="text-indigo-600 hover:underline text-sm inline-block mb-4">
            &larr; kembali ke home
            </Link>

            {/* header */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h1 className="w-0 text-xl md:text-2xl font-semibold text-black ">sosial media icons</h1>
                <p className="mt-2 mb-0 text-gray-600 text-sm md:text-base">Css Sprite Sheet</p>
            </div>

            {/* Icon Grid  */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 md:gap-6">
                    {sosialIcons.map((icon, index) => (
                        <div
                        key={index}
                        className="flex flex-col items-center gap-2 md:gap2 cursor-pointer"
                        onMouseEnter={() => setHoverIcon(icon.name)}
                        onMouseLeave={() => setHoverIcon(null)}
                        onClick={() => setSelectedIcon(icon)}
                        role="button"
                        tabIndex={0}
                        >
                            <div 
                            className={`rounded-xl shadow-sm transition-all duration-200
                                ${hoveredIcon === icon.name ? 'scale-110 ' : 'scale-100'}`}
                            style={{
                                width: `${displaySize}px`,
                                height: `${displaySize}px`,
                                backgroundImage: "url('/image.jpeg')",
                                backgroundSize: `${iconSize * 4}px ${iconSize * 4}px`,
                                backgroundPosition: `-${icon.col * iconSize + icon.offsetX}px -${icon.row * iconSize + icon.offsetY}px`,
                                boxShadow: hoveredIcon === icon.name ? `0 4px 12px ${icon.color}60` : undefined

                            }}
                            />

                            <span className="text-xs md:text-sm text-gray-800 text-center">{icon.name}</span>
                        </div>
                    ))}
                </div>

                {/* preview section  */}
                {selectedIcon && (
                    <div className="mt-4 md:mt-6 p-4 md:p-6 rounded-lg bg-gray-50 flex flex-col md:flex-row gap-4 items-start md:items-center shadow-sm">
                        <div
                        className="rounded-2xl mx-auto md:mx-0 flex-shrink-0"
                        style={{
                            width: `${previewSize}px`,
                            height: `${previewSize}px`,
                            backgroundImage: "url('/image.jpeg')",
                            backgroundSize: `${iconSize * 4 * (previewSize / displaySize)}px ${iconSize * 4 * (previewSize / displaySize)}px`,
                            backgroundPosition: `-${selectedIcon.col * iconSize * (previewSize / displaySize) + selectedIcon.offsetX * (previewSize / displaySize)}px 
                            -${selectedIcon.row * iconSize * (previewSize / displaySize) + selectedIcon.offsetY * (previewSize / displaySize)}px`,
                        }}
                        />

                        <div className="flex-1 w-full md:w-auto text-center md:text-left">
                            <h3 className="m-0 text-lg md:text-xl font-semibold">{selectedIcon.name}</h3>
                            <p className="mt-2 mb-0 text-gray-600 text-sm">preview</p>
                            <div className="mt-3 md:mt-4">
                                <button
                                onClick={() => setSelectedIcon(null)}
                                className="px-4 py-2 rounded-lg border-none bg-gray-200 hover:bg-gray-300 cursor-pointer transition color">close</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}