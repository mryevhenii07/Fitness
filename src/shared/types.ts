export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "our classes",
  Contact = "contact",
}
export interface BenefitsTypes {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
