'use client';
import { IMachineList } from '@/types/Interface';
import MachineRow from './MachineRow';
import { useState } from 'react';

const MachineList = () => {
  const machineArray: IMachineList[] = [
    {
      id: 1,
      name: 'La Marzocco GS3 MP',
      dimension: '35.5 x 40 x 53 ', //holder
      price: 11299,
    },
    {
      id: 2,
      name: 'Breville Oracle Touch',
      dimension: '45.5 x 40 x 37.3 ', //holder
      price: 4500,
    },
    {
      id: 3,
      name: 'Rocket Porta Vita',
      dimension: '21 x 40 x 30 ', //holder
      price: 4300,
    },
  ];

  const [machines, setMachines] = useState<IMachineList[]>();
  const [display, setDisplay] = useState<Boolean>(false);

  return (
    <div>
      <div>
        <div>
          <p className="mt-20 py-10 text-center text-amber-800 text-lg font-semibold">
            Your Daily Buzz: Discover Your Ideal Coffee Machine with Us
          </p>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <button
          className="rounded-full bg-green-950 text-[#eee] py-3 px-5"
          onClick={() => {
            setMachines(machineArray);
            setDisplay(!display);
          }}
        >
          {display ? 'Hide' : 'Display'} Machinas
        </button>
      </div>

      {display && (
        <table className="bg-gray-300 table-auto w-full border-collapse border-spacing-y-10 text-left rounded-md">
          <thead>
            <tr>
              <th className="p-4">Machine Name</th>
              <th>Dimension</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {machines?.map((machine) => (
              <MachineRow key={machine.id} machine={machine} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MachineList;
