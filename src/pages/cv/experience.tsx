import Accordion from "@/components/Accordion";

export default function WorkExperience() {
  return (
    <>
      <h1 className="mb-4 mt-16 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        💼 My experience
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
        body={(
          <>
            <p>
              I worked with <a href="https://gecosistema.com/" className="link-base">GecoSistema</a> during my master thesis. My thesis
              tackled hydrological level forecasting with <acronym title="Machine Learning">ML</acronym> in Italian
              rivers.
            </p>
            <p className="mt-4">
              After the <a href="https://en.wikipedia.org/wiki/2023_Emilia-Romagna_floods" className="link-base">Emilia-Romagna floods</a> in
              2023, GecoSistema partnered with the European Union <a href="https://www.copernicus.eu/en" className="link-base">Copernicus</a>
              project. I was involved with the project because of my master thesis, and I was responsible for building
              a scalable system for hydrological forecasting in european rivers. This project will give european
              citizens earlier warnings about flash floods, making evacuation more effective.
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
        body={(
          <>
            <p>
              At <a href="https://esportsteamtwente.nl/" className="link-base">Esports Team Twente</a>, I was
              responsible for setting up the data pipeline for one of their teams' games. In addition to this, I did
              some projects with <acronym title="Machine Learning">ML</acronym> to give the teams insight in their
              communication and pathing efficiencies.
            </p>
          </>
        )}
      />
    </>
  )
}
