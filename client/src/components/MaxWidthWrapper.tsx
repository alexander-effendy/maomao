import { cn } from "@/lib/utils";
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className, 
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div 
      className={cn(
        'max-h-screen mx-auto w-full max-w-screen',
        className
    )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper;