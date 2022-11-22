import React, { ReactNode } from 'react';
// Create props interface
interface TitleProps {
    children: ReactNode;
}

function TitleComponent({ children }: TitleProps) {
   return (
      <h1
         className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
      >
         {children}
      </h1>
   )
}

export default TitleComponent;