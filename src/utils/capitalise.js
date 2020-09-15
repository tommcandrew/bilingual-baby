export const capitalise = (str) => {
  const res = str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
  return res;
};
