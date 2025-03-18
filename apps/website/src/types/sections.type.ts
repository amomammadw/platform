export interface ISectionItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ISectionContent {
  title: string;
  items: ISectionItem[];
}
