import Head from 'next/head';
import Link from "next/link";

export default function Resume() {
  return (
    <>
      <Head>
        <title>My resume</title>
        <meta name="description" content="The resume of Koen van den Brink" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full" src="/koen.jpg" alt="This is me!"/>
                  <div>
                    <Link href="/" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Koen van den Brink</Link>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">Full-stack developer</p>
                  </div>
                </div>
              </address>
            </header>
            <section>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                👨‍🔧‍ Profile
              </h1>
              <p>
                As a skilled full-stack developer, I have a deep passion for building robust, scalable, and
                user-friendly applications. I enjoy working with UX/UI and business teams to understand what technology
                is needed within companies and build it with a vision for scalability. With over 4 of experience in the
                field, I possess an in-depth understanding of the entire web development process, from conceptualization
                to deployment.
              </p>
              <p>
                My expertise includes proficiency in front-end and back-end technologies. The frontend technologies
                include HTML, CSS, TypeScript, Vue, Node.js. The backend technologies include Express, Django, GraphQL,
                and many AWS services.
              </p>
              <p>
                Additionally, I have experience in developing responsive and mobile-friendly designs, implementing
                security measures, and ensuring cross-browser compatibility. I am comfortable working in agile
                development environments and collaborating with other developers, designers, and stakeholders to deliver
                high-quality products.
              </p>
              <p>
                Overall, my technical skills, combined with my ability to solve complex problems and work efficiently
                under pressure, make me a valuable asset to any organization seeking a top-notch full-stack developer.
              </p>
            </section>
            <section>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                💻 Employment history
              </h1>
              <p>
                As a CTO in a small tech-startup, I gained extensive experience in managing the technical aspects of a
                company&apos;s operations. I was responsible for overseeing the development of the company&apos;s
                products, managing the technical team, and ensuring that our products were delivered on time and within
                budget.
              </p>
              <p>
                This experience has equipped me with a unique perspective on how to leverage technology to achieve
                business goals and drive growth. I am well-versed in a wide range of technologies and platforms,
                including cloud computing, mobile applications, and web development frameworks. Additionally, I have
                honed my leadership and project management skills, allowing me to effectively manage cross-functional
                teams and deliver results that align with business objectives.
              </p>
              <p>
                These skills and experiences make me a perfect hire for any organization seeking a developer who can
                drive innovation, deliver results, and create a culture of collaboration and excellence.
              </p>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                🎓 Educational history
              </h1>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2020-2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    (MSc) Double Masters - Data Science & Entrepreneurship
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    My double masters in Data Science and Entrepreneurship has equipped me with a unique skill set that
                    blends technical expertise with entrepreneurial acumen. With my in-depth knowledge of data
                    analytics, machine learning, and statistical modeling, I am well-equipped to solve complex business
                    problems and generate valuable insights for any organization. Additionally, my understanding of
                    entrepreneurship and innovation allows me to discuss business opportunities and requirements and
                    translate them into technology. This combined skill set can make me a valuable asset to any company
                    seeking to leverage data to drive business growth and innovation.
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2017-2019
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    (BSc) Honours Bachelor - Processes of Change
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    My Bachelor of Honours in Change Management has provided me with a deep understanding of
                    organizational change processes, management theories, and effective communication strategies. This
                    knowledge and skill set makes me hirable for a variety of roles in change management and
                    organizational development. Moreover, my ability to analyze complex situations and implement
                    practical solutions can make me a valuable asset to any organization seeking to navigate change
                    effectively.
                  </p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2017-2020
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    (BSc) Bachelor - Technical Computer Science
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    My study in technical computer science has equipped me with a strong foundation in computer
                    programming, algorithms, data structures, and software engineering principles. This knowledge and
                    skills set make me hirable for a full-stack developer position, where I can work on both the
                    front-end and back-end of web applications. Moreover, my ability to troubleshoot complex technical
                    issues and develop scalable solutions can make me a valuable asset to any software development team.
                  </p>
                </li>
              </ol>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}
