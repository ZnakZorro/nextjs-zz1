import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.containery}>
      <Head>
        <title>Zorro</title>
      </Head>

      <main className={styles.mainy}>

        <h1 className={styles.titley}>
          Welcome to my zone
        </h1>

      <div className={styles.gridy}>
          <a href="/" className={styles.cardy}>
            <h3>Hello start&rarr;local index.js</h3>
          </a>
      </div>

        
      </main>

      
    </div>
  );
}
