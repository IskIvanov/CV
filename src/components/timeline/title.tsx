import React, {ReactNode}from 'react';
interface TitleProps {
    children: ReactNode;
}

function TitleComponent({ children }: TitleProps) {
   return (
      <h1
         className="text-sm font-bold decoration-4 mb-5 text-stone-900 dark:text-white"
      >
         {children}
      </h1>
   )
}

export default TitleComponent;