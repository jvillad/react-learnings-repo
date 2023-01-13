export default function Form() {
  return (
    <main className="h-screen flex-items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-lg font-bold">Lets get started 👋🏼</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem corporis ipsa natus ipsum omnis dolore officiis! Ea
            omnis fugit sit.
          </p>
          <div className="mt-6">
            {/* Name input */}
            <label className="block text-sm p-b2" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 border-gray-400 p-2 rounded-md w-1/2 focus:border-teal-400"
              type="text"
              name="name"
              placeholder="Enter name here"
            />
          </div>
        </div>
      </form>
    </main>
  );
}
