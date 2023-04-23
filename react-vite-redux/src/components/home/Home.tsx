import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="container lg:max-w-screen-lg mx-auto text-center">
      <h1 className="text-[80px] font-bold mb-4 rustic-text">
        Welcome to Brew Machina
      </h1>
      <p className="text-[32px] font-light mb-10">
        Bean there, Brewed that! We are your daily source of caffeine and
        kindness!
      </p>
      <Link
        to="about"
        className="text-orange-700 hover:text-orange-800 font-bold text-[20px]"
      >
        More about us...
      </Link>
    </section>
  );
};

export default Home;
