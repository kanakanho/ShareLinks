export type Data = {
  Name: string;
  Description: string;
  Icon: string;
  BgImage: string;
  Links: {
    alt: string;
    url: string;
  }[];
  article: {
    image: string;
    movie: string;
    title: string;
    article: string;
    margin: string;
    link: string;
  }[];
};

export const demoData: Data = {
  Name: "Programmer",
  Description: "Web Developer\nTypeScript & Python",
  Icon: "https://img.esa.io/uploads/production/attachments/19973/2024/01/22/148413/cf4691a3-6ae6-4636-ab02-b8415cd0925d.png",
  BgImage: "https://kanakanho.vercel.app/img/blue.jpeg",
  Links: [
    {
      alt: "Twitter",
      url: "https://twitter.com/",
    },
    {
      alt: "Github",
      url: "https://github.com/",
    },
    {
      alt: "Qiita",
      url: "https://qiita.com/",
    },
    {
      alt: "Zenn",
      url: "https://zenn.dev/",
    },
    {
      alt: "note",
      url: "https://note.com/",
    },
    {
      alt: "Youtube",
      url: "https://www.youtube.com/",
    },
  ],
  article: [
    {
      image: "",
      movie: "",
      title: "大きなタイトル",
      article: "小さな補足",
      margin: "",
      link: "",
    },
    {
      image: "https://kanakanho-record.vercel.app/img/evening.jpg",
      movie: "",
      title: "画像の添付",
      article: "",
      margin: "",
      link: "",
    },
    {
      image: "",
      movie: "7j3M3-k7X3g",
      title: "動画の添付",
      article: "",
      margin: "",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "リンクもできるよ",
      article: "",
      margin: "",
      link: "https://ja.react.dev/blog/2023/03/16/introducing-react-dev",
    },
    {
      image: "",
      movie: "",
      title: "",
      article: "",
      margin: "absent",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "空白を開ける",
      article: "",
      margin: "",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "",
      article: "",
      margin: "absent",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "",
      article: "小",
      margin: "",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "",
      article: "",
      margin: "low",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "",
      article: "中",
      margin: "",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "",
      article: "",
      margin: "high",
      link: "",
    },
    {
      image: "",
      movie: "",
      title: "",
      article: "大",
      margin: "",
      link: "",
    },
  ],
};
