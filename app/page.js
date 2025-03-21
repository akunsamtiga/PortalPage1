import Art from "./components/Art";
import Art2 from "./components/Art2";
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
      <Art2 />
    </main>
  );
}
