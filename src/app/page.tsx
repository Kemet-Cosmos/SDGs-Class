import Hero from "@/components/Hero"
import OverView from "@/components/OverView";
import Categories from "@/components/Categories"
export default function Home() {
  return (
    <main className="space-y-20 lg:space-y-0">
        <Hero/>
        <OverView/>
        <Categories/>
    </main>
  );
}
