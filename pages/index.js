import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  // define the callAPI function that takes a first name and last name as parameters
  // const callAPI = async event => {
  //   event.preventDefault();

  //   // instantiate a headers object
  //   var myHeaders = new Headers();
  //   // add content type header to object
  //   myHeaders.append("Content-Type", "application/json");
  //   // using built in JSON utility package turn object to string and store in a variable
  //   const raw = JSON.stringify({ "firstName": event.target.fName.value, "lastName": event.target.lName.value });
  //   // create a JSON object with parameters for API call and store in a variable
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };
  //   // make API call with parameters and use promises to get response
  //   fetch(process.env.NEXT_PUBLIC_DB_RNS, requestOptions)
  //     .then(response => response.text())
  //     .then(result => alert(JSON.parse(result).body))
  //     .catch(error => console.log('error', error));
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        {/* <form onSubmit={callAPI}>
          <label htmlFor="fName">First Name :</label>
          <input type="text" name="fName" id="fName" />
          <label htmlFor="lName">Last Name :</label>
          <input type="text" name="lName" id="lName" />
          <button type="submit">Call API</button>
        </form> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
