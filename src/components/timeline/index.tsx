import { useRouter } from 'next/router';
import React from 'react';
import timeline from '../../data/timeline';
import TimelineItem from './timeline-item';
import TitleComponent from './title';

function TimelineWrapper() {
   const router = useRouter();
   const handleDownload = () => {
      router.push('/static/resume.pdf');
   };
   return (
      <div className='pt-11'>
         <TitleComponent>Timeline</TitleComponent>
         {timeline.map((item, index) => (
            <TimelineItem 
               key={index}
               year={item.year}
               title={item.title}
               duration={item.duration}
               details={item.details}
            />
         ))}
         <button 
         onClick={handleDownload}
         className="mt-10 rounded-xl
          p-4 border border-white
           bg-gray-500 
            shadow-lg
            bg-gray-500/80">Download CV</button>
      </div>
   )
}

export default TimelineWrapper;