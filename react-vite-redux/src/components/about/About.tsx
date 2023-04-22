import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="container lg:max-w-screen-lg mx-auto">
      <div>
        <h1> About Us</h1>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio
        accusantium fugiat modi facilis ea? Consectetur aliquid maxime dicta
        iusto corporis non assumenda esse voluptas aspernatur quae consequatur,
        odio sunt, provident voluptatibus natus modi obcaecati. Illum vel
        perferendis vero delectus saepe dolorum ipsa quos sed ad nobis. Commodi
        ad odio numquam dolor amet. Possimus, illum expedita alias facilis quam
        hic, amet culpa, blanditiis qui quas fuga adipisci corrupti architecto
        deserunt sed. Nihil enim assumenda vero possimus iste quam esse corporis
        sunt magnam sit fugiat fuga modi deleniti ullam, sequi itaque, delectus
        dolores ex id? Libero officiis, voluptates labore quisquam veniam, rem
        vero eos eum reprehenderit modi laboriosam provident molestias!
        Voluptates distinctio aperiam dolorum harum quae laudantium eveniet
        ratione cumque corrupti qui, quia quis commodi itaque repellat? In neque
        inventore suscipit nulla mollitia, distinctio voluptates recusandae,
        ratione, iste voluptatibus vero nostrum eos. Sunt, libero quae maiores
        suscipit vitae autem odit labore?
      </div>
      <div>
        <Link to="/" className="text-orange-700 hover:text-orange-800">
          Back
        </Link>
      </div>
    </section>
  );
};

export default About;
