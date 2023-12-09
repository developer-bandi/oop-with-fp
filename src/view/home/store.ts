import { atom } from "recoil";

export const searchForm = atom({
  key: "searchForm",
  default: {
    country: "kr",
    category: "general",
    q: "",
  },
});

export const searchResultList = atom<
  {
    title: string;
    content: string;
    publishedAt: string;
    url: string;
    image: string;
    author: string;
    like: boolean;
  }[]
>({
  key: "searchResultList",
  default: [],
});
