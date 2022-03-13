import Head from 'next/head'
import Image from 'next/image'
import ThaanaKeyboard from '../components/thaanaKeyboard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thaana Keyboad Input</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          React js Thaana Keyboard Input
        </p>
        <br />

        <ThaanaKeyboard input={<input className="thaana thaanakeyboard" placeholder="ލިޔަމާ..." style={{ width: '100%' }} />} />
        <br />
        <ThaanaKeyboard input={<textarea rows="4" cols="50" className="thaana thaanakeyboard" placeholder="ލިޔަމާ..." style={{ width: '100%' }} />} />

        <p className={styles.description}>
          <code className={styles.code}>Thaana keyboard demo</code>
        </p>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
