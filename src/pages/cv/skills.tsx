import SkillBadge from "@/components/SkillBadge";
import DropdownFilter from "@/components/DropdownFilter";
import {useCallback, useState} from "react";
import {CategoriesFiltersType} from "@/types/categories";

export default function Skills() {

  const [filters, setFilters] = useState<CategoriesFiltersType>({
    machineLearning: true,
    generalFramework: false,
    cloud: true,
    backend: false,
    frontend: false,
    frontendFramework: false,
    general: true,
  });

  const updateFilters = useCallback((newFilters: CategoriesFiltersType) => {
    console.log("Setting new filters");
    console.log(newFilters);
    setFilters(newFilters);
  }, [setFilters]);

  return (
    <>
      <h1 className="mb-4 mt-16 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
      💡 <span className="mr-4">My skills</span>
        <DropdownFilter
          label="See more"
          filters={filters}
          updateFilters={updateFilters}
        />
      </h1>
      {/* Frontend stuff */}
      {(filters.frontend) ? (
        <>
          <SkillBadge skillName="HTML" category="frontend" />
          <SkillBadge skillName="CSS / SCSS" category="frontend" />
          <SkillBadge skillName="JavaScript" category="frontend" stars={4} />
          <SkillBadge skillName="TypeScript" category="frontend" stars={3} />
        </>
      ) : undefined}
      {/* Machine Learning */}
      {(filters.machineLearning) ? (
        <>
          <SkillBadge skillName="PyTorch" category="machineLearning" stars={5} />
          <SkillBadge skillName="Tensorflow" category="machineLearning" stars={2} />
          <SkillBadge skillName="Lightning" category="machineLearning" stars={4} />
          <SkillBadge skillName="Ray Tune" category="machineLearning" stars={2} />
          <SkillBadge skillName="Pandas" category="machineLearning" stars={4} />
          <SkillBadge skillName="Pandas" category="machineLearning" stars={3} />
          <SkillBadge skillName="GeoPandas" category="machineLearning" stars={2} />
        </>
      ) : undefined}
      {/* Frontend frameworks stuff */}
      {(filters.frontendFramework) ? (
        <>
          <SkillBadge skillName="Vue" category="frontendFramework" />
          <SkillBadge skillName="React" category="frontendFramework" />
          <SkillBadge skillName="Next" category="frontendFramework" />
        </>
      ) : undefined}
      {/* Backend */}
      {(filters.backend) ? (
        <>
          <SkillBadge skillName="Python" category="backend" stars={5} />
          <SkillBadge skillName="Java" category="backend" stars={4} />
          <SkillBadge skillName="C++" category="backend" stars={2} />
          <SkillBadge skillName="Haskell" category="backend" stars={2} />
          <SkillBadge skillName="R" category="backend" stars={2} />
          <SkillBadge skillName="Elixir" category="backend" stars={2} />
          <SkillBadge skillName="Rust" category="backend" stars={1} />
          <SkillBadge skillName="Dart" category="backend" stars={3} />
        </>
      ) : undefined}
      {/* General frameworks */}
      {(filters.generalFramework) ? (
        <>
          <SkillBadge skillName="Django" category="generalFramework" />
          <SkillBadge skillName="Postgres" category="generalFramework" />
          <SkillBadge skillName="MongoDB" category="generalFramework" />
        </>
      ) : undefined}
      {/* Cloud */}
      {(filters.cloud) ? (
        <>
          <SkillBadge skillName="AWS Lambda" category="cloud" />
          <SkillBadge skillName="AWS DynamoDB" category="cloud" />
          <SkillBadge skillName="AWS EC2" category="cloud" />
          <SkillBadge skillName="AWS ECS" category="cloud" />
          <SkillBadge skillName="AWS Cognito" category="cloud" />
          <SkillBadge skillName="AWS S3" category="cloud" />
          <SkillBadge skillName="AWS API Gateway" category="cloud" />
          <SkillBadge skillName="AWS ECR" category="cloud" />
        </>
      ) : undefined}
      {/* General */}
      {(filters.general) ? (
        <>
          <SkillBadge skillName="Scrum" category="general" />
          <SkillBadge skillName="CI/CD" category="general" />
          <SkillBadge skillName="Docker" category="general" />
          <SkillBadge skillName="SSH" category="general" />
          <SkillBadge skillName="REST" category="general" />
          <SkillBadge skillName="Public Speaking" category="general" />
        </>
      ) : undefined}
    </>
  )
}
