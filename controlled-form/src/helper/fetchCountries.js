// https://laravel-world.com/api/countries

export const fetchCountries = async () => {
  const apiRes = await fetch('https://laravel-world.com/api/countries');

  if (!apiRes.ok) {
    throw new Error(`failed fetch, not ok`);
  }

  return apiRes.json();
};
