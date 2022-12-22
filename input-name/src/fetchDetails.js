const fetchDetails = async (name) => {
  const apiRes = await fetch(`https://api.agify.io/?name=${name}`);
  return apiRes.json();
};

export default fetchDetails;
