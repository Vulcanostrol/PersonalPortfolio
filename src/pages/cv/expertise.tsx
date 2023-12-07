import Accordion from "@/components/Accordion";
import {header, timePeriodText} from "@/styles/shorthands";

export default function Expertise() {
  return (
    <>
      <h1 className={header}>💻 Relevant expertise</h1>
      <Accordion
        header={(
          <>
            Engineering expertise
          </>
        )}
        body={(
          <ul className="list-disc list-inside">
            <li className="mt-1">3 years of academic and professional experience with building state-of-the-art machine learning systems.</li>
            <li className="mt-1">Good understanding of - and experience with - end-to-end machine learning projects (data exploration, feature engineering, training, tuning, deploying).</li>
            <li className="mt-1">Experience working with stakeholders, both internally (designers, operations, business, etc.) and externally (clients, users, project financiers, etc.).</li>
          </ul>
        )}
        summary={(
          <ul className="list-disc list-inside">
            <li className="mt-1">3 years of academic and professional experience with building state-of-the-art machine learning systems.</li>
            <li className="mt-1">Good understanding of - and experience with - end-to-end machine learning projects (data exploration, feature engineering, training, tuning, deploying).</li>
            <li className="mt-1">Experience working with stakeholders, both internally (designers, operations, business, etc.) and externally (clients, users, project financiers, etc.).</li>
          </ul>
        )}
      />
    </>
  )
}
