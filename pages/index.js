import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>It is friday? </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {getDay()}
        </h1>
      </main>

      <audio id="my_audio" src="musica.mp3" loop="loop"></audio>
      <footer className={styles.footer}>
          Powered by simo ventures
      </footer>
    </div>
  )
}

function getDay() {
  var days = ["No", "Still no", "Not yet", "It is close", "I can smell it", "Yes, it is!", "It is gone."];
  var d = new Date().getDay();
  console.log(process)
  console.log(d)
  console.log(document.readyState)
  if(process.browser &&  d == 5) {
    document.getElementById("my_audio").play();
  }
  return days[d];
}
