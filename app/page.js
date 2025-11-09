"use client";
import styles from "@/app/page.module.css";
import CircularText from "@/components/CircularText";

export default function Home() {
  return (
    <main className={styles.main}>
      <video autoPlay muted loop playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <aside className={styles.coMainInfo}>
        <img src="/box-image.png" alt="Box" />
         
      </aside>
      <section className={styles.mainInfo}>
        <h1>FIGHT|GRIND|CONQUER</h1>
        <p>Step into the ring with purpose. Our boxing gym blends pro-level coaching, structured classes, and a supportive community that helps beginners and competitors reach their best.</p>

        <button>JOIN THE FIGHT</button>
      </section>
    </main>
  );
}
