import Image from "next/image"
export default function Mediasetion() {
    return (
        <section className="mt-8 space-y-8 ">
            {/* judul section */}
            <h3 className="text-2xl font-bold text-black">galeri media responsive</h3>

            {/* single image dengan next/image */}
            <div className=" space-y-4">
                <h4 className="text-2xl font-semibold text-black">gambar optimasi otomatis</h4>
                <Image 
                    src="/image.jpg"   
                    alt="gambar optimasi otomatis" 
                    width={800} 
                    height={500} 
                    className="w-full h-auto rounded-lg shadow-xl"
                    />
                <p className="text-gray-600 text-sm">
                    gambar ini otomatis di lazy load dikonversi jadi webp dan ukurannya di sesuaikan
                </p>
            </div>

            {/* grid gamar 2: di mobile bertumpuk */}
            <div className="space-y-4">
                <h4 className="text-xl font-semibold text-black">galeri responsive</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image 
                    src="/image.jpg"
                    alt="gambar 1"
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <Image 
                    src="/image.jpg"
                    alt="gambar 2"
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* video responsive youtube */}
            <div className="space-y-4">
                <h4 className="text-xl font-semibold text-black">video youtube responsive</h4>
                <div className="aspect-video w-full">
                    <iframe 
                        src="https://youtube.com/embed/dQw4w9WgXcQ"
                        className="w-full h-full rounded-lg shadow-xl"
                        allowFullScreen
                        ></iframe>
                </div>  
                <p className="text-gray-600 text-sm">video akan selalu mecega rasio 16:9 dan responsive di semua ukuran</p>
            </div>

            {/* video lokal opsional */}
            <div className="space-y-4">
                <h4 className="text-xl font-semibold text-black">video youtube responsive</h4>
                <div className="aspect-video w-full">
                    <video   
                        src="/sample-video.mp4"
                        controls
                        className="w-full h-full rounded-lg shadow-xl"></video>
                        
                        
                </div>  
                <p className="text-gray-600 text-sm">video akan selalu mecega rasio 16:9 dan responsive di semua ukuran</p>
            </div>

        </section>
    )
}