import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="container lg:max-w-screen-lg mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Welcome to Brew Machina</h1>
      <p>
        We've bean there, brewed that! We are your daily source of caffeine and
        kindness!
      </p>
      <Link to="about" className="text-orange-700 hover:text-orange-800">
        More about us...
      </Link>
    </section>
  );
};

export default Home;
