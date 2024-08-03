interface ISidebarItems {
  title: string;
  icon: string;
  link: string;
  sub?: [
    {
      title: string;
      icon: string;
      link: string;
    }
  ];
}

export const sidebarItems: ISidebarItems[] = [
  {
    title: "داشبورد",
    icon: "ki-solid ki-element-11",
    link: "/dashboard",
  },
  {
    title: "رویداد ها",
    icon: "ki-solid ki-save-2",
    link: "/dashboard/events",
    sub: [
      {
        title: "ایجاد رویداد",
        icon: "ki-solid ki-archive-tick",
        link: "/dashboard/events/create",
      },
    ],
  },
  {
    title: "اشخاص",
    icon: "ki-solid ki-profile-user",
    link: "/dashboard/persons",
    sub: [
      {
        title: "ایجاد اشخاص",
        icon: "ki-solid ki-user-edit",
        link: "/dashboard/persons/create",
      },
    ],
  },
];
export default sidebarItems;
