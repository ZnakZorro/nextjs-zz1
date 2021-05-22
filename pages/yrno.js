import Head from 'next/head';
import styles from '../styles/Home.module.css';


function Blog({ posts }) {
  let temp0 = posts.longIntervals[0].temperature.value;
  let temp1 = posts.longIntervals[1].temperature.value;
  let temp2 = posts.longIntervals[1].temperature.value;
  return   <div class="container">
    <div class="row">
      <div class="col-md-12">
        <p>Teraz0 {temp0}&deg;C</p>
        <p>Teraz1 {temp1}&deg;C</p>
        <p>Teraz2 {temp2}&deg;C</p>
      </div>
    </div>
  </div>
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //let url ='https://www.yr.no/api/v0/locations/5-1220500/forecast'; // Szczecin 
  let url ='https://www.yr.no/api/v0/locations/2-3083828/forecast'; // Dąbie
  const res = await fetch(url)
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog