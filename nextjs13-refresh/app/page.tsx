import Banner from '@/components/Banner';
import MachineList from '@/components/MachineList';

const page = () => {
  return (
    <div className="container lg:max-w-screen-lg mx-auto pt-5">
      <Banner headerText="Top Tier Coffee Machines" />
      <MachineList />
    </div>
  );
};

export default page;
