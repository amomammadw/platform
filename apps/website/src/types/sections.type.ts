export interface ISectionItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ISectionContent<T = ISectionItem> {
  title: string;
  items: T[];
}
