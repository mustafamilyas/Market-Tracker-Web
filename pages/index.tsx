import Head from 'next/head'
import Image from 'next/image'
import { CryptoCategories } from '../components/CryptoCategories'
import { MarketTable } from '../components/MarketTable'
import { SearchInput } from '../components/SearchInput'
import { useGetMarketChanges } from '../hooks/useGetMarketChanges'
import { CryptoAPI } from '../modules/CryptoAPI'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  // Fetch data from external API
  const supportedCurrencies = await CryptoAPI.getSupportedCurrencies()
  // Pass data to the page via props
  return { props: { supportedCurrencies } }
}

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
        <CryptoCategories />
        <MarketTable />
      </main>
    </div>
  )
}
