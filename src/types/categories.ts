export type CategoriesType = {
  frontend: string,
  machineLearning: string,
  frontendFramework: string,
  backend: string,
  cloud: string,
  generalFramework: string,
  general: string,
};

export type CategoryType = keyof CategoriesType;

export type CategoriesFiltersType = {
  [k in keyof CategoriesType]: boolean;
};

export const CategoriesNames: CategoriesType = {
  frontend: "Frontend",
  machineLearning: "Machine Learning",
  frontendFramework: "Frontend Frameworks",
  backend: "Programming Languages",
  cloud: "Cloud",
  generalFramework: "General Web Frameworks",
  general: "General skills",
};
