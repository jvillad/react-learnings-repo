import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { fetchCountries } from '../helper/fetchCountries';
import { toTitleCase } from '../helper/toTitleCase';

export default function Form() {
  const results = useQuery(['data'], fetchCountries);

  // formik initial values
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: '',
      terms: '',
      letter: '',
    },
  });

  if (results.isLoading)
    return <h1 className="text-center p-10">Loading...</h1>;
  const countries = results.data;

  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-lg font-bold py-2">Lets get started 👋🏼</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem corporis ipsa natus ipsum omnis dolore officiis! Ea
            omnis fugit sit.
          </p>
          <div className="mt-6">
            {/* Name input */}
            <div className="pb-4">
              <label className="block text-sm p-2" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-gray-400 p-2 rounded-md w-1/2 focus:border-teal-400"
                type="text"
                name="name"
                placeholder="Enter name here"
                value={toTitleCase(formik.values.name)}
                onChange={formik.handleChange}
              />
            </div>
            {/* Email Input */}
            <div className="pb-4">
              <label className="block text-sm p-2" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-gray-400 p-2 rounded-md w-1/2 focus:border-teal-400"
                type="text"
                name="email"
                placeholder="Enter email here"
              />
            </div>
            {/* Dropdown */}
            <div className="pb-4">
              <label className="block text-sm p-2" htmlFor="country">
                Country
              </label>
              <select className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-teal-400 p-2 ">
                <option></option>
                {countries.data.map((country) => (
                  <option key={country.id}>{country.name}</option>
                ))}
              </select>
            </div>
            <div className="block text-xs font-bold py-1">Terms of service</div>
            {/* Terms checkbox */}
            <div className="flex items-center pt-2 gap-2">
              <input
                className="rounded-sm text-blue-800"
                type="checkbox"
                name="terms"
                value="checked"
              />
              <label className="text-sm" htmlFor="agreement">
                Agree to agreement
              </label>
            </div>
            {/* Subscribe checkbox */}
            <div className="flex items-center pt-2 pb-4  gap-2">
              <input
                className="rounded-sm text-blue-800"
                type="checkbox"
                name="letter"
                value="checked"
              />
              <label className="text-sm" htmlFor="letter">
                Subscribe to newsletter
              </label>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
