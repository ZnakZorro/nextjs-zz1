import Head from 'next/head';
import styles from '../styles/Home.module.css';



function Radio() {
  return <div class="container">
    <a href="/"><h1>Radio</h1></a>
    <div class="row">
      <div class="col-md-12">
        <button onClick="radio(0)" class="btn btn-info">Radio 0</button>
        <button onClick="radio(1)" class="btn btn-info">Radio 1</button>
        <button onClick="radio(2)" class="btn btn-info">Radio 2</button>
      </div>
    </div>
  </div>
}

export default Radio