import React, {useCallback, useState, useMemo} from "react";

type CategoriesType = {
  frontend: string,
  frontendFramework: string,
  backend: string,
  cloud: string,
  generalFramework: string,
  general: string,
};

const categories: CategoriesType = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  frontendFramework: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
  backend: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  cloud: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  generalFramework: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  general: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
};

// bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300
// bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300

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
      {[...Array(starAmount)].map(() => "⭐")}
    </span>
  )
}