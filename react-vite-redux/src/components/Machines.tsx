import { useState } from 'react';

const Machines = () => {
  const [item, setItem] = useState({ name: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItem({ name: value });
  };

  return (
    <div className="container lg:max-w-screen-lg mx-auto  py-10">
      <form onSubmit={() => alert(item.name)}>
        <h3 className="text-orange-700 text-xl text-center">Add Item</h3>
        <input
          className="text-[#0a0a0a]"
          type="text"
          onChange={handleChange}
          value={item.name}
        />
        <input type="submit" value="Save" className="block" />
      </form>
    </div>
  );
};

export default Machines;
