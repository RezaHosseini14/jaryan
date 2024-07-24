export interface IEvents {
  id: number;
  title: string;
  description?: string;
  date: any;
  population: string;
  image: string;
  guests?: [
    {
      image?: string;
      name: string;
    }
  ];
  feedbackSocialMedia?: [
    {
      title: string;
      count: number;
    }
  ];
  reprints?: [
    {
      title: string;
      count: number;
    }
  ];
}

export const events: IEvents[] = [
  {
    id: 1,
    title: "جشنواره مذهبی اسفند",
    description: "کودکان و نوجوانان میتوانند با ارسال نقاشی و دلنوشته های کوتاه با موضوع عزیز دلم حسین (ع) و ارسال به وسیله این پیوند در این پویش شرکت کنند. مهلت ارسال آثار تا نیمه ماه محرم. بهترین آثار در طراحی های بیلبورد های شهری ویژه ماه محرم استفاده خواهد شد",
    date: "2023-03-03",
    population: "150000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    title: "مراسم عزاداری محرم",
    description: "مراسم عزاداری و مراسمات مذهبی به مناسبت ماه محرم و شهادت امام حسین (ع)",
    date: "2023-08-12",
    population: "120000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 3,
    title: "جشن نوروز",
    description: "جشنواره مذهبی به مناسبت آغاز سال نو و نوروز با برنامه‌های مذهبی و سنتی، یکی از بزرگترین و مهم‌ترین رویدادهای فرهنگی و مذهبی است که هر ساله با شور و هیجان بسیاری برگزار می‌شود. این جشنواره که به مناسبت آغاز سال نو و نوروز برگزار می‌شود، دارای برنامه‌های متنوع و گوناگونی است که ترکیبی از آداب و رسوم مذهبی و سنتی را به نمایش می‌گذارد.در این جشنواره، مردم از تمامی نقاط کشور گرد هم می‌آیند تا در مراسم و آیین‌های مختلف شرکت کنند. این مراسم شامل دعاها و نیایش‌های جمعی، خواندن قرآن، اجرای موسیقی مذهبی، نمایش‌های سنتی، و رقص‌های محلی است. همچنین، بازارچه‌های محلی برپا می‌شوند که در آن‌ها محصولات سنتی و دست‌ساز به فروش می‌رسند. از جمله محصولات موجود در این بازارچه‌ها می‌توان به صنایع دستی، لباس‌های محلی، مواد غذایی سنتی و شیرینی‌های مخصوص نوروز اشاره کرد.",
    date: "2023-03-21",
    population: "180000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 4,
    title: "نمایشگاه کتاب دینی",
    description: "برگزاری نمایشگاه کتاب‌های دینی با معرفی کتب و مقالات مذهبی معتبر",
    date: "2023-05-10",
    population: "100000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 5,
    title: "سخنرانی مذهبی",
    description: "سخنرانی با موضوعات مذهبی و تفسیر اساطیر و داستان‌های دینی",
    date: "2023-07-15",
    population: "90000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 6,
    title: "نمایش تئاتر دینی",
    description: "نمایش تئاتر و نمایشنامه‌های مذهبی به روایت داستان‌های اسطوره‌ای",
    date: "2023-09-20",
    population: "110000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 7,
    title: "مراسم عید قربان",
    description: "مراسمات مذهبی به مناسبت عید قربان و قربانی‌گذاری",
    date: "2023-10-05",
    population: "130000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 8,
    title: "کنفرانس بین المللی ادیان",
    description: "کنفرانس بین‌المللی برای بحث و گفتگو درباره ادیان جهان",
    date: "2023-11-15",
    population: "200000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 9,
    title: "مراسم نیایش",
    description: "مراسمات مذهبی با برگزاری مراسم‌های نیایش و عبادی",
    date: "2023-12-25",
    population: "95000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 10,
    title: "مراسم دینی عید فطر",
    description: "روگار یعید فطر و مراسم‌های مذهبی مربوط به این عید",
    date: "2024-05-01",
    population: "170000",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];
