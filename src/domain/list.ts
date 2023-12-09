import NewsRepository from "../repository/news/news";
import LikeRepository from "../repository/like/like";
import {
  getNewsListRequestDto,
  getNewsListResponseDto,
} from "../repository/news/type";

class ListDomain {
  private likeRepository: LikeRepository;
  private newsRepository: NewsRepository;

  constructor() {
    this.likeRepository = new LikeRepository();
    this.newsRepository = new NewsRepository();
  }

  async getNewsList(requestDto: getNewsListRequestDto) {
    const [newsList, likeList] = await Promise.all([
      this.newsRepository.getNewsList(requestDto),
      this.likeRepository.getLikeCardList(),
    ]);

    console.log(newsList);

    return this.getCardListTranslator(newsList, likeList);
  }

  private getCardListTranslator(
    newsList: getNewsListResponseDto,
    likeList: string[]
  ) {
    return newsList.articles.map((news) => {
      const like = likeList.includes(news.title);

      return {
        title: news.title,
        content: news.description,
        publishedAt: news.publishedAt,
        url: news.url,
        image: news.urlToImage,
        author: news.author || "저자 미상",
        like,
      };
    });
  }
}

export default ListDomain;
