"use client"

import {useState, useEffect, useCallback, useRef} from "react"

//definisikan tipe data item

interface FeedItem {
    id: number;
    title: string;
    description: string;
    page : number;

}



export default function InfiniteScrollFeed() {
    const [items,setItems] = useState<FeedItem[]>([]);
    const [page,setPage] = useState(1);
    const [IsLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    //reff untuk observer
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    //fungsi untuk memuat data baru (simulasi Api Call)
    const fetchData = async (pageNum: number): Promise<FeedItem[]> => {
        // Simulasi API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000)); //simulasi delay
      
    
        //batas maksimum halaman
        if (pageNum > 5) {
            return [];
        }

        //buat data dummy
        const newItems: FeedItem[] = Array.from({length: 10}, (_, i) => ({
            id: (pageNum - 1) * 10 + i + 1,
            title: `Feed Item ${(pageNum - 1) * 10 + i + 1}`,
            description: `Deskripsi untuk feed item ${(pageNum - 1) * 10 + i + 1}`,
            page : pageNum
        }));
        return newItems;

    };

    //calback untuk intersection observer
    const loadMoreItems = useCallback(async () => {
        if (IsLoading || !hasMore) return;

        setIsLoading(true);
        
        try {
            const newItems = await fetchData (page);
            if (newItems.length === 0) {
                setHasMore(false);
            } else {
                setItems((prevItems) => [...prevItems, ...newItems]);
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }, [IsLoading, hasMore, page]);
    
    //setup intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreItems();
                }
            },
            {
                rootMargin : "200px",
                threshold : 0.1
            }
        );

        const currentsentinel = sentinelRef.current;
        if (currentsentinel) {
            observer.observe(currentsentinel);
        }

        return () => {
            if (currentsentinel) {
                observer.unobserve(currentsentinel);
            }
        };
     }, [loadMoreItems])

     //load data awal
        useEffect(() => {
            loadMoreItems();
        }, []);

    

    return (
        <div className="w-full">
            <h3 className=" text-xl font-bold mb-4 text-gray-800">
                infinite scroll feed
            </h3>

            {/* container feed item */}
            <div className="space-y-4 ">
                {items.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                        <h4 className="font-semibold text-lg text-indigo-600 mb-2">
                            {item.title}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                        <span className="inline-block mt-2 text-xs text-gray-400">
                            Halaman {item.page} # ID: {item.id}</span>
                    </div>
                ))}
            </div>

            {/* skeleton loading */}
            {IsLoading && (
                <div className="mt-4 space-y-4">
                    {Array.from({length: 3}).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))}
                </div>
            )}

            {/* sentinel untuk intersection observer */}
            <div ref={sentinelRef} className="h-10 flex items-center justify-center">
                {!hasMore && !IsLoading && (
                    <p className="text-gray-500 text-sm font-medium">
                        Anda sudah mencapai akhir feed.
                    </p>
                )}
                </div>
            </div>
    )
}

//komponen skeleton loader
function SkeletonLoader() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-100 rounded w-1/4 mt-3"></div>
        </div>
    )
}