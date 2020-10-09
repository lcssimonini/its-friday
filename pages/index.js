import {useRef, useEffect, createRef} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function getDayMessage() {
	var days = ["No", "Still no", "Not yet", "It is close", "I can smell it", "Yes, it is!", "It is gone."];
	var d = new Date().getDay();
	return days[d];
}

export default function Home() {
	const state = useRef(getDayMessage())
	const audio = createRef()
	
	useEffect(() => {
		if (state.current === "Yes, it is!") {
			audio.current.play()
		}
	}, []);
	
	return (
		<div className={styles.container}>
			<Head>
				<title>Is it friday? </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					{getDayMessage()}
				</h1>
			</main>

			<audio ref={audio} id="my_audio" src="musica.mp3" loop="loop"></audio>

			<footer className={styles.footer}>
				Powered by simo ventures
        <br/>
        <a href="http://www.hojeesexta.com.br/" target="_blank" rel="noopener noreferrer" >
          Inspiração
        </a>
			</footer>
		</div>
	)
}
