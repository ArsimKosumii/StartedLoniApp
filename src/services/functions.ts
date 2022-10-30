import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const fixName = (name: string) => {
  let newName = name[0].toUpperCase();
  newName = newName += name.substring(1);

  return newName;
};
