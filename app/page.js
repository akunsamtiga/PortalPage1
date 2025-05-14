import Art from "./components/Art";
import Art2 from "./components/Art2";
import CaraOrder from "./components/CaraOrder";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Rooms />
      <Art />
      <Art2 />
      <CaraOrder />
    </main>
  );
}
