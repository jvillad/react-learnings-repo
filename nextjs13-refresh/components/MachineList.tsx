'use client';
import { IMachineList } from '@/types/Interface';
import MachineRow from './MachineRow';
import { useState } from 'react';
import { fetchMachines } from '@/helpers/fetchMachines';

const MachineList = () => {
  const [machines, setMachines] = useState<IMachineList[]>([]);
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
          onClick={async () => {
            setMachines(await fetchMachines());
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
