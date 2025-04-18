import {theme} from "./Theme";

export const getTextColor = (enterTheme: string, firstColor: any, secondColor: any) =>
  enterTheme === "light" ? firstColor : secondColor;

  // enterTheme === "light" ? theme.lightTheme.text : theme.darkTheme.text;
