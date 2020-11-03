declare interface IMyComponentTwoWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyComponentTwoWebPartStrings' {
  const strings: IMyComponentTwoWebPartStrings;
  export = strings;
}
