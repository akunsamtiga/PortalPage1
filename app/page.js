import Head from "next/head";
import Art from "./components/Art";
import Art2 from "./components/Art2";
import CaraOrder from "./components/CaraOrder";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="hU3YoPIg9qaWGhByXfXk5ynyriLME_4rIdojZCQBKck"
        />
      </Head>

      <main className="bg-gray-100">
        <Hero />
        <Rooms />
        <Art />
        <Art2 />
        <CaraOrder />
      </main>
    </>
  );
}
