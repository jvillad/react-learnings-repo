const fetchCatFact = async () => {
  const apiRes = await fetch(`https://catfact.ninja/fact`);
  return apiRes.json();
};

export default fetchCatFact;
