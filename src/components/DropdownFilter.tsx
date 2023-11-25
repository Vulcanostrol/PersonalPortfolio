import React, {useCallback, useState, useMemo} from "react";
import {CategoriesFiltersType, CategoriesNames, CategoryType} from "@/types/categories";
import DropdownFilterItem from "@/components/DropdownFilterItem";

type Props = {
  label: JSX.Element | React.ReactElement | string;
  filters: CategoriesFiltersType,
  updateFilters: (newFilters: CategoriesFiltersType) => void,
};

export default function DropdownFilter(props: Props) {

  const [collapsed, setCollapsed] = useState<boolean>(true);

  const hiddenStateClass = useMemo(() => collapsed ? "hidden" : "", [collapsed])

  const onDropdownClick = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed, setCollapsed]);

  const onCheckboxChange = useCallback((key: CategoryType, val: boolean) => {
    const filters = {...props.filters};
    filters[key] = val;
    props.updateFilters(filters);
  }, [props]);

  return (
    <>
      <button onClick={onDropdownClick}
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-slate-800 print:hidden"
              type="button">
        {props.label}
        <svg className="ml-2 w-2.5 h-2.5 ms-3"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div className={`${hiddenStateClass} absolute bg-white divide-y rounded-lg shadow dark:bg-gray-700 print:hidden`}>
        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
          {(Object.keys(props.filters) as Array<CategoryType>).map((name) => (
            <DropdownFilterItem key={name} checked={props.filters[name]} name={name} callback={onCheckboxChange}>
              {CategoriesNames[name]}
            </DropdownFilterItem>
          ))}
        </ul>
      </div>
    </>
  )
}