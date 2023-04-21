export const fetchMachines = async () => {
  const response = await fetch('/machines.json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const machines = await response.json();
  return machines;
};
