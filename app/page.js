"use client";
import styles from "@/app/page.module.css";
import MagicBento from "@/components/MagicBento";

export default function Home() {
  return (
    <main>
      <section className={styles.main}>
        <video autoPlay muted loop playsInline>
          <source src="/images/background.mp4" type="video/mp4" />
        </video>
        <aside className={styles.coMainInfo}>
          <img src="/images/box-image.png" alt="Box" />
        </aside>
        <section className={styles.mainInfo}>
          <h1>FIGHT|GRIND|CONQUER</h1>
          <p>
            Step into the ring with purpose. Our boxing gym blends pro-level
            coaching, structured classes, and a supportive community that helps
            beginners and competitors reach their best.
          </p>
          <button>JOIN THE FIGHT</button>
        </section>
      </section>

      <section className={styles.mainSecond}>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="80, 80, 80"
        />
      </section>

      <section className={styles.mainThird}>
        <div>
          <h1>Amateur Tournament</h1>
          <p>
            Test your skill, heart, and discipline in our upcoming Amateur MMA
            Tournament. This is your chance to step into the cage, challenge
            yourself, and gain real fight experience in a safe, regulated
            environment. Open to all weight classes and skill levels, the event
            is designed for fighters ready to prove their dedication and take
            the next step toward competition. Train hard. Show up. Earn respect.
          </p>
          <button>Online Registration</button>
        </div>
      </section>

      <section className={styles.mainFourth}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <header>
              <h3>Month Packet</h3>
              <p>Beginner MMA Program.</p>
              <h1>$50</h1>
            </header>

            <ul>
              <li>✔ 12 MMA training sessions</li>
              <li>✔ Professional coach guidance</li>
              <li>✔ Full gym access & equipment</li>
              <li>✔ Free nutrition & recovery</li>
            </ul>
            <button>SUBSCRIBE</button>
          </div>


          <div className={styles.card}>
            <header>
              <h3>Month Packet</h3>
              <p>Intermediate MMA Program</p>
              <h1>$70</h1>
            </header>

            <ul>
              <li>✔ 24 MMA training sessions</li>
              <li>✔ Strength & power training</li>
              <li>✔ Sparring practice included</li>
              <li>✔ Custom recovery & diet plan</li>
            </ul>
            <button>SUBSCRIBE</button>
          </div>

          <div className={styles.card}>
            <header>
              <h3>Month Packet</h3>
              <p>Advanced MMA Training</p>
              <h1>$90</h1>
            </header>

            <ul>
              <li>✔ 36 high-intensity sessions</li>
              <li>✔ Personalized coaching plan</li>
              <li>✔ All type of workouts</li>
              <li>✔ Exclusive fighter diet plan</li>
            </ul>
            <button>SUBSCRIBE</button>
          </div>

          
        </div>
      </section>
    </main>
  );
}

