declare interface IMyComponentOneWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyComponentOneWebPartStrings' {
  const strings: IMyComponentOneWebPartStrings;
  export = strings;
}
