import Accordion from "@/components/accordion";

export default function WorkExperience() {
  return (
    <>
      <h1 className="mb-4 mt-16 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        💼 Work experience
      </h1>
      <Accordion
        header={(
          <>
            Machine Learning Engineer (GecoSistema)
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              <time dateTime="2023-06-01" title="June, 2023">June, 2023</time>
              &nbsp;-&nbsp;
              <time dateTime="2023-10-01" title="October, 2023">October, 2023</time>
            </p>
          </>
        )}
      />
      <Accordion
        header={(
          <>
            Co-founder & CTO (Awaves)
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              <time dateTime="2019-01-01" title="January, 2019">January, 2019</time>
              &nbsp;-&nbsp;
              <time dateTime="2023-10-01" title="Now">Now</time>
            </p>
          </>
        )}
        body={(
          <>
            <p>
              Awaves was a startup that I co-founded with the mission of building an AI DJ. This DJ is
              able to create mashups and DJ sets automatically. I was the technical mind behind the
              startup and in true startup fashion, that means I had to do a lot of things:
            </p>
            <ul className="list-disc list-inside my-4">
              <li>Choosing the technologies to be used for development</li>
              <li>Designing the software architecture</li>
              <li>Writing a lot of code</li>
              <li>Handling deployment, service uptime, telemetry, etc.</li>
            </ul>
            <p className="my-4">
              The list above contains the very basics, and obviously there was a lot more to it. However,
              I would also like to specifically outline some major responsibilities with regards to the
              startup being an AI startup:
            </p>
            <ul className="list-disc list-inside">
              <li>Coming up with data strategies</li>
              <li>Setting up data pipelines</li>
              <li>Researching and creating ML models</li>
              <li>Training, evaluating and optimizing ML models</li>
            </ul>
        </>
        )}
      />
      <Accordion
        header={(
          <>
            Data Analyst (Esports Team Twente)
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              <time dateTime="2020-09-01" title="September, 2020">September, 2020</time>
              &nbsp;-&nbsp;
              <time dateTime="2022-09-01" title="September, 2022">September, 2022</time>
            </p>
          </>
        )}
      />
    </>
  )
}
