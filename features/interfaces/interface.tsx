export interface IConnection {
  connectionType: string;
  link: string;
  _id: number | string;
}
export interface ICreateConnection {
  connectionType: string;
  link: string;
}
export interface ISocialNetworks {
  label: string;
  value: string;
  logo: Element | null | any | undefined;
}
export interface IThemeContext {
  mode: string;
  setMode: (a: "light" | "dark") => void;
  lang: string;
  setLang: (a: "fa" | "en") => void;
}
