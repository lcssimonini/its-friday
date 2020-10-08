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
          It is friday? {getDay()}
        </h1>
      </main>

      <footer className={styles.footer}>
          Powered by simo ventures
      </footer>
    </div>
  )
}

export default function getDay() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date().getDay();
  return days[d];
}
