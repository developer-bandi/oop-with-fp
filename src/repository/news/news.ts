import { getQueryString } from "../../utils/queryString";
import { getNewsListRequestDto, getNewsListResponseDto } from "./type";

class NewsRepository {
  async getNewsList(
    requestDto: getNewsListRequestDto
  ): Promise<getNewsListResponseDto> {
    console.log(import.meta.env.VITE_API_KEY);
    const requestQuery = getQueryString({
      ...requestDto,
      apiKey: import.meta.env.VITE_API_KEY,
    });
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?${requestQuery}`
    );
    const toJson = await data.json();

    return toJson;
  }
}

export default NewsRepository;
