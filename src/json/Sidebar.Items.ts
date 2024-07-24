interface ISidebarItems {
  title: string;
  icon: string;
  link: string;
}

export const sidebarItems: ISidebarItems[] = [
  {
    title: "داشبورد",
    icon: "ki-solid ki-element-11",
    link: "/dashboard",
  },
  {
    title: "رویداد ها",
    icon: "ki-solid ki-abstract-17",
    link: "/dashboard/events",
  },
];
export default sidebarItems;
