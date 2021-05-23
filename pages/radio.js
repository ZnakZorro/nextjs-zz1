import Head from 'next/head';
import styles from '../styles/Home.module.css';



function Radio() {
  return <div className={styles.container}>
    <a href="/"><h1>Radio</h1></a>
    <div className={styles.row}>
      <div className={styles.col}>
        <div >
          <button type="button" onClick="radio(0)" className={styles.btn}>Radio 0</button> 
          <button type="button" onClick="radio(1)" className={styles.btn}>Radio 1</button>
          <button type="button" onClick="radio(2)" className={styles.btn}>Radio 2</button>
        </div>
      </div>
    </div>
  </div>
}

export default Radio