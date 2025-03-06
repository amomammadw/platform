export interface IConfig {
  name: string;
  title: string;
  author?: {
    name: string;
    website: string;
  };
  description: string;
  lang: 'en' | 'fa';
  dir: 'rtl' | 'ltr';
}
