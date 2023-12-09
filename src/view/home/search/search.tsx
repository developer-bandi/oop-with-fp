import useSearchHooks from "./hooks";
import "./search.css";
const Search = () => {
  const {
    searchFormValue,
    onChangeCountryHandler,
    onChangeCategoryHandler,
    onChangeQHandler,
    clickSearchButtonHandler,
  } = useSearchHooks();

  /* render */
  return (
    <div className="search">
      <div>
        <label htmlFor="country">국가</label>
        <select
          name="country"
          id="country"
          onChange={onChangeCountryHandler}
          defaultValue={searchFormValue.country}
        >
          <option value="us">미국</option>
          <option value="kr">대한민국</option>
          <option value="gb">영국</option>
          <option value="fr">프랑스</option>
          <option value="jp">일본</option>
          <option value="cn">중국</option>
        </select>
      </div>
      <label htmlFor="category">카테고리</label>
      <select
        name="category"
        id="category"
        onChange={onChangeCategoryHandler}
        defaultValue={searchFormValue.category}
      >
        <option value="business">비즈니스</option>
        <option value="entertainment">연예</option>
        <option value="general">일반</option>
        <option value="health">건강</option>
        <option value="science">과학</option>
        <option value="sports">스포츠</option>
        <option value="technology">기술</option>
      </select>
      <div>
        <label htmlFor="q">검색어</label>
        <input
          name="q"
          id="q"
          onChange={onChangeQHandler}
          value={searchFormValue.q}
          placeholder="검색어를 입력하세요"
        />
      </div>
      <div>
        <button onClick={clickSearchButtonHandler}>검색</button>
      </div>
    </div>
  );
};

export default Search;
