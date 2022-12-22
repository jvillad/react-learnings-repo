const fetchExcuse = async (category) => {
  const apiRes = await fetch(
    `https://excuser-three.vercel.app/v1/excuse/${category}/`
  );
  return apiRes.json();
};

export default fetchExcuse;
