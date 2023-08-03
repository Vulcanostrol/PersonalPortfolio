import SkillBadge from "@/components/SkillBadge";

export default function Skills() {
  return (
    <>
      <h1 className="mb-4 mt-16 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        💡 My skills
      </h1>
      {/* Frontend stuff */}
      <SkillBadge skillName="HTML" category="frontend" />
      <SkillBadge skillName="CSS / SCSS" category="frontend" />
      <SkillBadge skillName="JavaScript" category="frontend" stars={4} />
      <SkillBadge skillName="TypeScript" category="frontend" stars={4} />
      {/* Frontend frameworks stuff */}
      <SkillBadge skillName="Vue" category="frontendFramework" />
      <SkillBadge skillName="React" category="frontendFramework" />
      <SkillBadge skillName="Next" category="frontendFramework" />
      {/* Backend */}
      <SkillBadge skillName="Python" category="backend" stars={5} />
      <SkillBadge skillName="Java" category="backend" stars={4} />
      <SkillBadge skillName="C++" category="backend" stars={2} />
      <SkillBadge skillName="Haskell" category="backend" stars={2} />
      <SkillBadge skillName="R" category="backend" stars={2} />
      <SkillBadge skillName="Elixir" category="backend" stars={2} />
      <SkillBadge skillName="Rust" category="backend" stars={1} />
      <SkillBadge skillName="Dart" category="backend" stars={3} />
      {/* General frameworks */}
      <SkillBadge skillName="PyTorch" category="generalFramework" />
      <SkillBadge skillName="Pandas" category="generalFramework" />
      <SkillBadge skillName="Tensorflow" category="generalFramework" />
      <SkillBadge skillName="GeoPandas" category="generalFramework" />
      <SkillBadge skillName="Django" category="generalFramework" />
      <SkillBadge skillName="Postgres" category="generalFramework" />
      <SkillBadge skillName="MongoDB" category="generalFramework" />
      {/* Cloud */}
      <SkillBadge skillName="AWS Lambda" category="cloud" />
      <SkillBadge skillName="AWS DynamoDB" category="cloud" />
      <SkillBadge skillName="AWS EC2" category="cloud" />
      <SkillBadge skillName="AWS ECS" category="cloud" />
      <SkillBadge skillName="AWS Cognito" category="cloud" />
      <SkillBadge skillName="AWS S3" category="cloud" />
      <SkillBadge skillName="AWS API Gateway" category="cloud" />
      <SkillBadge skillName="AWS ECR" category="cloud" />
      {/* General */}
      <SkillBadge skillName="Scrum" category="general" />
      <SkillBadge skillName="CI/CD" category="general" />
      <SkillBadge skillName="Docker" category="general" />
      <SkillBadge skillName="SSH" category="general" />
      <SkillBadge skillName="REST" category="general" />
      <SkillBadge skillName="Public Speaking" category="general" />
    </>
  )
}
