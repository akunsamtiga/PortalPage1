import Art from "./components/Art";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Divider />
      <Art />
    </main>
  );
}
