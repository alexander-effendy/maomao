import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NotepadText } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface DashboardContentProps {
  className: string;
  open: boolean;
  setOpen: (isOpen: boolean) => void
}

const status = [
  {
    name: 'goni'
  },
  {
    name: 'ons'
  },
  {
    name: 'setengah'
  },
  {
    name: '1kg'
  },
  {
    name: '5kg'
  },
  {
    name: 'double'
  }
];

const karetStock = [
  {
    name: 'MSKK',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'MSHK',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'MSMK',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'MSK',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'MSH',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'MSM',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'MSKU (4mm)',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Merah Mikro',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Hijau Mikro',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Kuning Mikro',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Merah Kecil',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Hijau Kecil',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Kuning Kecil',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Merah Besar',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Hijau Besar',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
  {
    name: 'Gajah Kuning Besar',
    goni: 80,
    ons: 20,
    setengah: 2,
    satu: 10,
    double: 72
  },
]

interface statusProps {
  name: string;
}

interface karetStockProps {
  name: string,
  goni: number,
  ons: number,
  setengah: number,
  satu: number,
  double: number
}

const Supply: React.FC<DashboardContentProps> = ({ className, open, setOpen }) => {

  const [currentCategory, setCurrentCategory] = useState<string>('');

  const StatusComponent: React.FC<statusProps> = ({ name }) => {
    return (
      <div onClick={() => setCurrentCategory(name)} className="select-none hover:font-bold rounded-[10px] flex flex-col bg-white w-[180px] h-[40px] items-center justify-center">
        <div className="">{name}</div>
      </div>
    )
  }

  const KaretStockComponent: React.FC<karetStockProps> = ({ name, ons, goni, setengah, satu, double}) => {
    return (
      <div className="flex flex-col bg-white w-[470px] rounded-[10px] p-[15px] h-[150px] shadow-xl">
        <section className="flex justify-between gap-[10px] select-none">
          <span className="font-bold my-auto">{name}</span>
          <Button className="hover:bg-[#a6e6dd] rounded-[20px] h-[30px] font-bold bg-[#3e7c85] text-white">Details</Button>
        </section>
        <section className="flex gap-[10px] mt-[10px]">
          <div>goni: {goni}</div>
          <div>ons: {ons}</div>
          <div>500g: {setengah}</div>
          <div>1kg: {satu}</div>
          <div>double: {double}</div>
        </section>
      </div>
    )
  }

  return (
    <div className={`${className} w-full`}>
      {/* top section */}
      <section className="select-none flex gap-[10px] my-auto bg-blue-90s0 w-[500px]">
        <div className={`${open && 'shidden'} my-auto`} onClick={() => setOpen(!open)}><NotepadText className=""/></div>
        <Input className="bg-white rounded-[10px] w-[400px]" placeholder="search" />
      </section>
      
      {/* group section */}
      <div className="bg-blue-6s00 mt-[30px] w-full">
        {/* title */}
        <section className="flex">
          
        </section>
        <div className="font-bold text-2xl">Supply</div>
        {/* groups */}
        <section className="flex gap-[20px] mt-[20px] w-full overflow-x-asuto">
          {status.map((status: any) => (
            <StatusComponent name={status.name} />
          ))}
        </section>

        {/* main main section */}
        <section className="mt-[40px] flex flex-col w-full h-[700px]">
          {/* title */}
          <span className="font-bold mb-[20px]">{currentCategory}</span>
          <section className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto overflow-x-hidden`}>
            {karetStock.map((karet: any) => (
              <KaretStockComponent name={karet.name} ons={karet.ons} goni={karet.goni} setengah={karet.setengah} satu={karet.satu} double={karet.double}/>
            ))}
          </section>
         
        </section>
      </div>
    </div>
  )
}

export default Supply;