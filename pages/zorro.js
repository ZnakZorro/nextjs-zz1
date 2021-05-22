import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zorro</title>
      </Head>

      <main className={styles.mainy}>

      <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Hello start&rarr;
            local index.js</h3>
          </a>
      </div>

        
      </main>

      
    </div>
  );
}
