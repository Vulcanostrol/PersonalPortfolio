import React from "react";
import {CategoriesType} from "@/types/categories";

const categories: CategoriesType = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 print:bg-blue-100 print:text-blue-800",
  frontendFramework: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 print:bg-gray-100 print:text-gray-800",
  machineLearning: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 print:bg-purple-100 print: text-purple-800",
  backend: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 print:bg-red-100 print:ext-red-800",
  cloud: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 print:bg-indigo-100 print:0 text-indigo-",
  generalFramework: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 print:bg-green-100 print: text-green-800",
  general: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 print:bg-yellow-100 print:0 text-yellow-",
};

type Props = {
  skillName: string
  category: keyof CategoriesType
  stars?: number
};

export default function SkillBadge(props: Props) {
  const classNames = categories[props.category];
  const starAmount = props.stars ? props.stars : 0;

  return (
    <span className={`${classNames} inline-block text-xs font-medium mr-2 mb-1 px-2.5 py-0.5 rounded`}>
      {props.skillName}
      {/*{[...Array(starAmount)].map(() => "⭐")}*/}
    </span>
  )
}