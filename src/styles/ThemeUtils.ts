import { theme } from "./Theme";

export const getTextColor = (enterTheme: string) =>
  enterTheme === "light" ? theme.lightTheme.text : theme.darkTheme.text;
