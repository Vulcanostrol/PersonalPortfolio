import Head from 'next/head';
import Link from "next/link";
import Accordion from "@/components/Accordion";
import WorkExperience from "@/pages/cv/experience";
import Education from "@/pages/cv/education";
import Skills from "@/pages/cv/skills";

export default function Cv() {
  return (
    <>
      <Head>
        <title>My CV</title>
        <meta name="description" content="The CV of Koen van den Brink" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto pb-32 w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full" src="/koen.jpg" alt="This is me!"/>
                  <div>
                    <Link href="/" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Koen van den Brink</Link>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <a href="mailto:koen.brink.vd@gmail.com">
                        📧 koen.brink.vd@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </address>
            </header>
            <WorkExperience />
            <Education />
            <Skills />
          </article>
        </div>
      </main>
    </>
  )
}
