import { useTheme } from '@emotion/react';
import React from 'react';

type TimelineItemProps = {
   year: string;
   title: string;
   duration: string;
   details: string;
   company: string;
   location?: string;
}

function TimelineItem({ year, title, duration,location, details, company }: TimelineItemProps) {
   
   // TODO: Change theme color based on company.
   // const { theme } = useTheme();

   return (
      <div className="m-0 flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 list-none" style={{margin: 0}}>
         <li className="mb-10 ml-4 list-none">
            <div className="absolute -left-2 bottom-32 w-3 h-3 bg-stone-200 rounded-full border border-white dark:border-stone-900 dark:bg-stone-700"/>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-stone-900 dark:text-white" style={{margin: '0'}}>
                  {title}
               </h3>
               <div className="my-1 grow text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {duration}
               </div>
               <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {location}
               </div>
            </p>
            <p className="m-0 italic"><b>{company}</b></p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </div>
   )
}

export default TimelineItem;