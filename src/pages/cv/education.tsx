import Accordion from "@/components/Accordion";
import {header, timePeriodText} from "@/styles/shorthands";

export default function Education() {
  return (
    <>
      <h1 className={header}>
        🎓 My education
      </h1>
      <Accordion
        header={(
          <>
            Master of Science - Data Science (EIT Digital, double master)
            <p className={timePeriodText}>
              <time dateTime="2020-08-01" title="August, 2020">2020</time>
              &nbsp;-&nbsp;
              <time dateTime="2022-10-01" title="October, 2022">2022</time>
            </p>
          </>
        )}
        body={(
          <>
            <p>
              First year: <a href="https://www.utwente.nl/en/" className="link-base">
              University of Twente
            </a> (Enschede, Netherlands)
            </p>
            <p>
              Second year: <a href="https://www.kth.se/en" className="link-base">
              KTH Royal Institute of Technology
            </a> (Stockholm, Sweden)
            </p>
          </>
        )}
      />
      <Accordion
        header={(
          <>
            Bachelor of Honours - Processes of Change (University of Twente)
            <p className={timePeriodText}>
              <time dateTime="2018-01-01" title="January, 2018">2018</time>
              &nbsp;-&nbsp;
              <time dateTime="2019-07-01" title="July, 2019">2019</time>
            </p>
          </>
        )}
        body={(
          <>
            <p className="mb-4">
              The Processes of Change track teaches you to understand change and to promote it in practice. The first
              few courses were creating theory and understanding of businesses and change. After this, I did a few
              consultancy projects for the university.
            </p>
            <p>
              In addition to this, the course had a focus on entrepreneurship and presentation skills. I was personally
              coached to improve my presentation skills and engage people with my communication.
            </p>
          </>
        )}
      />
      <Accordion
        header={(
          <>
            Bachelor of Science - Computer Science (University of Twente)
            <p className={timePeriodText}>
              <time dateTime="2017-08-01" title="August, 2017">2017</time>
              &nbsp;-&nbsp;
              <time dateTime="2020-07-01" title="July, 2020">2020</time>
            </p>
          </>
        )}
        body={(
          <>
            <p>
              My bachelor thesis (<a href="http://essay.utwente.nl/82333/1/Bachelor_Thesis.pdf" className="link-base">
              Finding “The Drop”: Recognizing the climax in electronic music using classification models</a>) was about
              using ML to find the chorus in electronic dance music. It was recognized with a grading of 9.5/10.
            </p>
          </>
        )}
      />
    </>
  )
}
