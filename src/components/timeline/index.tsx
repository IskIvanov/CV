import { useRouter } from 'next/router';
import React from 'react';
import timeline from '../../data/timeline';
import EmailDialog from '../email-dialog';
import TimelineItem from './timeline-item';
import TitleComponent from './title';

function TimelineWrapper() {
   return (
      <div className='pt-11'>
         <TitleComponent>Timeline</TitleComponent>
         {timeline.map((item, index) => (
            <TimelineItem 
               key={index}
               year={item.year}
               title={item.title}
               duration={item.duration}
               location={item.location}
               details={item.details}
               company={item.company}
            />
         ))}
         <EmailDialog/>
      </div>
   )
}

export default TimelineWrapper;