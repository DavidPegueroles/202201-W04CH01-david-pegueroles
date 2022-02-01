import gentlemen from "./gentlemen";

const countSelectedGentlemen = () => {
  const selectedGentlemen = gentlemen.filter(
    (gentleman) => gentleman.selected
  ).length;

  return selectedGentlemen;
};

export default countSelectedGentlemen;
