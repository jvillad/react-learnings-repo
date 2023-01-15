import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Boon from '../assets/logo.png';
import { fetchCountries } from '../helper/fetchCountries';
import * as Yup from 'yup';
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

    // form validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(24, 'Name exceed 24 max character')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      country: Yup.string().required('Select a country'),
      terms: Yup.array().required('You must agree to the terms of service'),
    }),

    // on submit form
    onSubmit: (values) => {},
  });
  console.log(formik.errors);
  if (results.isLoading)
    return <h1 className="text-center p-10">Loading...</h1>;
  const countries = results.data;

  return (
    <main className="h-screen flex items-center justify-center">
      <form
        className="bg-white flex rounded-lg w-3/4 font-latoRegular"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-lg font-bold py-2 text-[#f353b2]">
            Lets get started 👋🏼
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem corporis ipsa natus ipsum omnis dolore officiis! Ea
            omnis fugit sit.
          </p>
          <div className="mt-6">
            {/* Name input */}
            <div className="pb-4">
              <label
                className={`block text-sm p-2 ${
                  formik.touched.name && formik.errors.name
                    ? 'text-red-600'
                    : ''
                }`}
                htmlFor="name"
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : 'Name'}
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
              <label
                className={`block text-sm p-2 ${
                  formik.touched.email && formik.errors.email
                    ? 'text-red-600'
                    : ''
                }`}
                htmlFor="email"
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : 'Email'}
              </label>
              <input
                className="border-2 border-gray-400 p-2 rounded-md w-1/2 focus:border-teal-400"
                type="text"
                name="email"
                placeholder="Enter email here"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            {/* Dropdown Country */}
            <div className="pb-4">
              <label className="block text-sm p-2" htmlFor="country">
                Country
              </label>
              <select
                className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-teal-400 p-2"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              >
                <option value="" name="not a country">
                  Select a country
                </option>
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
                onChange={formik.handleChange}
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
                onChange={formik.handleChange}
              />
              <label className="text-sm" htmlFor="letter">
                Subscribe to newsletter
              </label>
            </div>
          </div>

          <button
            className="py-3 mt-6 rounded-lg w-full text-sm bg-[#2babe7] text-white"
            type="submit"
          >
            Start clacking!
          </button>
        </div>
        <div className="flex items-center">
          <img
            src={Boon}
            className="align-bottom h-96 py-2 pr-4 ml-8"
            alt="boon tribe avatar"
          />
        </div>
      </form>
    </main>
  );
}
