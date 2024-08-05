import React from 'react';
// import { Button } from '@/components/ui/button';
import Supply from '@/components/DashboardContentPages/Supply';

interface DashboardContentProps {
  className: string;
  open: boolean;
  setOpen: (isOpen: boolean) => void
}

const DashboardContent: React.FC<DashboardContentProps> = ({ className, open, setOpen }) => {
  return (
    <div className={`bg-[#e7eced] ${className} flex flex-col p-[20px]`}>
      <Supply className="" open={open} setOpen={setOpen}/>
    </div>
  )
}

export default DashboardContent;