import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/Card";
import { CardDescription } from "../components/CardDescription";
import { CardTitle } from "../components/CardTitle";

export default function Home() {
  return (
    <div className="px-8">
      <Head>
        <title>Learning Tailwind CSS</title>
        <meta
          name="description"
          content="My demo app whilst I'm learning Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-16 flex flex-col justify-center items-center">
        <h1 className="m-0 text-6xl leading-5 text-center">
          Welcome to{" "}
          <a
            href="https://nextjs.org"
            className="no-underline hover:underline focus:underline active:underline text-sky-500"
            target="_blank"
          >
            Tailwind CSS!
          </a>
        </h1>

        <p className="mx-16 my-8 leading-6 text-2xl text-center">
          Get started by editing{" "}
          <code className="bg-gray-200 border-r-4 text-lg font-mono">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-stretch justify-center max-w-3xl">
          <Card as="a" href="https://tailwindcss.com/docs" target="_blank">
            <CardTitle>Documentation &rarr;</CardTitle>
            <CardDescription>
              Find in-depth information about Tailwind CSS features and API.
            </CardDescription>
          </Card>

          <Card as="a" href="https://headlessui.dev" target="_blank">
            <CardTitle>Learn &rarr;</CardTitle>
            <CardDescription>Learn about Headless UI</CardDescription>
          </Card>

          <Card
            as="a"
            href="https://github.com/vercel/next.js/tree/canary/examples"
            target="_blank"
          >
            <CardTitle>Examples &rarr;</CardTitle>
            <CardDescription>
              Discover and deploy boilerplate example Next.js projects.
            </CardDescription>
          </Card>

          <Card
            as="a"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
          >
            <CardTitle>Deploy &rarr;</CardTitle>
            <CardDescription>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </CardDescription>
          </Card>
        </div>
      </main>

      <footer className="flex-1 px-8 border-t border-t-gray-100 justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 justify-center items-center"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
