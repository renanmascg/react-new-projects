import styles from './home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span></h1>
          <p>
            Get Access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>
        
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
    
  )
}
