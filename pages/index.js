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
          {getDayMessage()}
        </h1>
      </main>

      <audio autoplay={isFriday()} id="my_audio" src="musica.mp3" loop="loop"></audio>
      <footer className={styles.footer}>
          Powered by simo ventures
      </footer>
    </div>
  )
}

function isFriday() {
  return new Date().getDay() == 4;
}

function getDayMessage() {
  var days = ["No", "Still no", "Not yet", "It is close", "I can smell it", "Yes, it is!", "It is gone."];
  var d = new Date().getDay();
  return days[d];
}
