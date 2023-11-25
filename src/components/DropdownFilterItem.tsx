import React, {ChangeEvent, useCallback, useId} from "react";
import {CategoryType} from "@/types/categories";

type Props = {
    name: CategoryType,
    callback: (key: CategoryType, val: boolean) => void,
    checked: boolean,
    children: React.ReactNode,
};

export default function DropdownFilterItem(props: Props) {
    const id = useId()

    const onCheckboxChange = useCallback((e: ChangeEvent) => {
        const element = e.target as HTMLInputElement;
        props.callback(props.name, element.checked);
    }, [props]);

    return (
        <>
            <li>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input checked={props.checked} id={id} onChange={onCheckboxChange} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor={id} className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                        {props.children}
                    </label>
                </div>
            </li>
        </>
    )
}