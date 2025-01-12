import { TitleType } from "../App";

export const setTitleFunc = (title: TitleType[]): void => {
  localStorage.setItem("title", JSON.stringify(title));
};
