export interface NavLink {
    name: string;
    href: string;
  }
  
  export interface NavbarProps {
    title: string;
    links: NavLink[];
  }

  export interface MobileHeaderProps {
    links: NavLink[];
  }

  export type HeadingProps = {
    color?: string;
    size?: "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    title: string;
    letter?: string;
    fontSize?: string;
  };

  export type ContainerProps = {
    children: React.ReactNode;
  };