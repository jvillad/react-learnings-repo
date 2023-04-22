import Image from 'next/image';

const page = () => {
  return (
    <div className="container lg:max-w-screen-lg mx-auto pt-5">
      <div>
        <Image
          src="https://au.lamarzoccohome.com/wp-content/uploads/2014/11/gs3_mp_1-group_angle-scaled.jpg"
          alt=""
          width={250}
          height={200}
        />
      </div>
      <h1>{}</h1>
    </div>
  );
};

export default page;
