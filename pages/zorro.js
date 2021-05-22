import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zorro</title>
      </Head>

      <main className={styles.main}>

      <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Hello start&rarr;</h3>
            <p>local index.js</p>
          </a>
      </div>

        
      </main>

      
    </div>
  );
}
