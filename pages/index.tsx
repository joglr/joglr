import Head from "next/head";
import styles from "../styles/Home.module.css";
import { promises as fs } from "fs";
import marked from "marked";
import ThemeSwitch from "../src/ThemeSwitch";
import { useEffect } from "react";

export default function Home({ readme }: { readme: string }) {
  useEffect(() => {
    document.body.classList.add("transition");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonas Glerup Røssum - Software Developer</title>
        <meta
          name="description"
          content="Jonas Glerup Røssum - Software Developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeSwitch />
      <div className={styles.root}>
        <div
          dangerouslySetInnerHTML={{
            __html: readme,
          }}
        />
        <div
          style={{
            textAlign: "center",
          }}
        >
          🚀
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const markdown = await fs.readFile("./README.md", "utf8");
  const readme = marked(markdown);
  return {
    props: {
      readme,
    },
  };
}
