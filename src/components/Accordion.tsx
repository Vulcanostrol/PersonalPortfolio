import React, {useCallback, useState, useMemo} from "react";

type Props = {
    header: JSX.Element | React.ReactElement | string;
    body?: JSX.Element | React.ReactElement | string;
    summary?: JSX.Element | React.ReactElement | string;
};

export default function Accordion(props: Props) {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const collapsedClass = useMemo(() => collapsed ? "hidden" : "", [collapsed])
    const roundedClass = useMemo(() => collapsed ? "rounded-xl" : "rounded-t-xl", [collapsed])
    const rotateClass = useMemo(() => collapsed ? "rotate-180" : "", [collapsed])

    const onHeaderClick = useCallback(() => {
        setCollapsed(!(collapsed && props.body));
    }, [collapsed, props, setCollapsed]);

    return (
        <>
            <h2>
                <button type="button" onClick={onHeaderClick} className={`${roundedClass} 
                mt-4 flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200
                focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 
                hover:bg-gray-100 print:border-none print:p-0`}>
                    <span>
                        {props.header}
                    </span>
                    {props.body &&
                    <svg className={`${rotateClass} w-3 h-3 shrink-0 print:hidden`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    }
                </button>
            </h2>
            {props.body &&
            <div>
                <div className={`${collapsedClass} p-5 border border-t-0 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 print:hidden`}>
                    {props.body}
                </div>
            </div>
            }
            {props.summary &&
            <div>
                <div className="text-sm hidden print:block">
                    {props.summary}
                </div>
            </div>
            }
        </>
    )
}