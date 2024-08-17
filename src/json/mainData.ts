export interface IEvent {
  id: number;
  title: string;
  topic: string;
  province: string;
  city: string;
  placement: string;
  createTime: string;
  eventDate: string;
  estimatedcost: number;
  audience: string;
  population: number;
  image: string;
  guests?: Array<{
    id: number;
    image?: string;
    title: string;
    topic: string;
  }>;
  organs: Array<{
    title: string;
  }>;
  description?: string;
}

export const mainData: any[] = [
  {
    id: 1,
    title: "مثل ستاره",
    topic: "مراسم روزدختر دهه کرامت",
    province: "مرکزی",
    city: "اراک",
    placement: "ورزشگاه پانزده‌هزارنفری‌امام خمینی (ره)",
    createTime: "1403/02/27",
    eventDate: "",
    estimatedcost: 3000000000,
    audience: "خانوادگی",
    guests: [
      {
        id: 1,
        title: "عبدالرضا هلالی",
        image: "/guests/helali.jpg",
        topic: "مداح",
      },
      {
        id: 2,
        title: "حامد سلطانی",
        image: "/guests/soltani.jpg",
        topic: "مجری",
      },
      {
        id: 3,
        title: "مهران رجبی",
        image: "/guests/rajabi.jpg",
        topic: "مجری",
      },
      {
        id: 4,
        title: "امیرتاجیک",
        image: "/guests/tajik.jpg",
        topic: "خواننده",
      },
      {
        id: 5,
        title: "روح الله رحیمیان",
        image: "/guests/rahimian.jpg",
        topic: "مداح",
      },
      {
        id: 6,
        title: "سارا روستاپور",
        image: "/guests/rostapour.jpg",
        topic: "مجری",
      },
    ],
    organs: [
      {
        title: "شهرداری",
      },
      {
        title: "وزارت ورزش و جوانان",
      },
      {
        title: "سازمان تبلیغات اسلامی",
      },
      {
        title: "سپاه پاسداران",
      },
    ],
    population: 200000,
    description:
      "این رویداد بزرگ با عنوان 'مثل ستاره' به مناسبت گرامیداشت روز دختر در دهه کرامت برگزار می‌شود. این مراسم که در ورزشگاه پانزده‌هزار نفری امام خمینی (ره) در اراک برگزار خواهد شد، فرصتی برای تجلیل از مقام دختران و زنان در جامعه است. با حضور خانواده‌ها، این رویداد قصد دارد به ترویج ارزش‌های اخلاقی و فرهنگی در میان جوانان و خانواده‌ها بپردازد. این مراسم با هزینه‌ای بالغ بر 3 میلیارد تومان تدارک دیده شده است و محتوایی غنی و متنوع برای مخاطبان فراهم می‌آورد. تاریخ برگزاری این رویداد به زودی اعلام خواهد شد",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];
