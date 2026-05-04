"use client";

import {useState} from "react";

interface ServerSideProps {
    compressedFile: File | null;
    originalSize: number | null;
    onresized: (data: any) => void;
}

export default function ServerRezize({compressedFile, originalSize, onresized} : ServerSideProps) {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any | null>(null);

    const handleResize = async () => {
        if (!compressedFile) return;
        setLoading(true);

        const fromData = new FormData();
        fromData.append("file", compressedFile);

        try {
            const response = await fetch("/api/server-resize", {
                method: "POST",
                body: fromData
            });
            
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            
            const data = await response.json();
            setResult(data);
            onresized(data);
        } catch (error) {
            console.error("Error during server-side resizing:", error);
        } finally {
            setLoading(false);
        }
    }
    
    const formabytes = (bytes: number) => {
            return (bytes / 1024).toFixed(2) + " KB";
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">step 2 server side resize</h2>
            <p className="text-gray-500 mb-6"> generate thumbnail 300x300</p>

            <button
            onClick={handleResize}
            disabled={loading || !compressedFile}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-7000 disable:bg-gray-400 font-medium"
            >
                {loading ? "Prosess resize..." : "generate tumbnail"}
            </button>

            {result && (
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-3">compressed image</h3>
                        <img 
                        src={result.originalUrl} 
                        alt="compressed"
                        className="w-full h-64 object-contain rounded border border-gray-50" 
                        />
                        <p className="mt-3 text-sm text-gray-600">
                            size: {formabytes(result.sizes.compressed)}
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-3">thumbnail 300x300</h3>
                        <img 
                        src={result.thumbnailUrl} 
                        alt="thumbnail"
                        className="w-full h-64 object-contain rounded border border-gray-50" 
                        />
                        <p className="mt-3 text-sm text-gray-600">
                            size: {formabytes(result.sizes.thumbnail)}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                            -{((1 - result.sizes.thumbnail / result.sizes.compressed) * 100).toFixed(1)}% lebih kecil dari original
                        </p>
                    </div>
                    
                </div>
            )}
        </div>
    ) 
    
    
}