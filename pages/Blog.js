function Blog({ posts }) {
  let ret = posts.longIntervals[0].temperature.value;
  return <div>{ret}</div>
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
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