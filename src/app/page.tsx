import Mediasetion from "@/components/mediasetion";
import InfiniteScrollFeed from "@/components/infiniteScroll";
import StatCard from "@/components/StatCard";

export default function () {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black">Selamat datang</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        <StatCard title="Statistik 1"/>
         <StatCard title="Statistik 2"/>
          <StatCard title="Statistik full" fullwidth/>

      </div>

      <Mediasetion />

      <InfiniteScrollFeed />
    </div>
  )
}