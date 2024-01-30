import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Knowus from "./components/Knowus/Knowus";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Knowus />
    </div>
  );
}
