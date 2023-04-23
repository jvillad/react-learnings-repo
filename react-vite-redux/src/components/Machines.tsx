import { useRef } from 'react';
import { useAppDispatch } from '../redux/store/store';
import { addItem } from '../redux/store/features/itemSlice';

const Machines = () => {
  const name = useRef<string>('');

  const dispatch = useAppDispatch();

  return (
    <div className="container lg:max-w-screen-lg mx-auto  py-10">
      <h3 className="text-orange-700 text-xl text-center">Add Item</h3>
      <label htmlFor="" className="p-1">
        Item Name
      </label>
      <input
        className="text-[#0a0a0a] block p-1"
        type="text"
        onChange={(e) => (name.current = e.target.value)}
      />
      <button
        type="submit"
        className="block"
        onClick={() => dispatch(addItem({ name: name.current }))}
      >
        Add
      </button>
    </div>
  );
};

export default Machines;
