import {
  getDataFromLocalStorage,
  setDataFromLocalStorage,
} from "../../utils/localstorage";

class LikeRepository {
  private key: string;

  constructor() {
    this.key = "newsLike";
  }

  getLikeCardList() {
    return getDataFromLocalStorage<string[]>(this.key);
  }

  postLikeNews(title: string) {
    const data = getDataFromLocalStorage<string[]>(this.key);
    const addedData = [...data, title];
    setDataFromLocalStorage(this.key, addedData);

    return addedData;
  }

  deleteLikeCard(title: string) {
    const data = getDataFromLocalStorage<string[]>(this.key);
    const deletedData = data.filter((existId) => existId !== title);
    setDataFromLocalStorage(this.key, deletedData);

    return deletedData;
  }
}

export default LikeRepository;
