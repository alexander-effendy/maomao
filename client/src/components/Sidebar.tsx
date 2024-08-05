import WarehouseIcon from '@mui/icons-material/Warehouse';
import { Button } from '@/components/ui/button';
import React from 'react';

interface SidebarProps {
  className: string;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className, open, setOpen }) => {
  return (
    <div className={`h-full bg-[rgb(25,34,55)] w-[230px] flex flex-col ${className}`}>
      <span className="text-white pt-[10px] mx-auto font-bold text-3xl">MAO<span className="text-purple-500">MAO</span></span>
      <Button 
        className="text-white" 
        onClick={() => setOpen(!open)}
      >
        Close
      </Button>

      {/* services */}
      <section className="flex flex-col text-white mt-[45px]">
        <Button className="px-[30px] hover:bg-blue-600 flex items-center justify-start gap-[15px] h-[50px]"><WarehouseIcon />Supply</Button>
        <Button className="px-[30px] hover:bg-blue-600 flex items-center justify-start gap-[15px] h-[50px]"><WarehouseIcon />Order</Button>
        <Button className="px-[30px] hover:bg-blue-600 flex items-center justify-start gap-[15px] h-[50px]"><WarehouseIcon />Analytics</Button>
      </section>
    </div>
  )
}

export default Sidebar;