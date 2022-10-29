export const fixName = (name: string) => {
  let newName = name[0].toUpperCase();
  newName = newName += name.substring(1);

  return newName;
};
