import Head from 'next/head'
import Image from 'next/image'
import { SearchInput } from '../components/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pintu Clone</title>
        <meta name="description" content="Pintu clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Harga Crypto dalam rupiah Hari ini</h1>
          <SearchInput />
        </header>
      </main>
    </div>
  )
}
