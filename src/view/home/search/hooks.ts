import { useRecoilState, useSetRecoilState } from "recoil";
import { searchForm, searchResultList } from "../store";
import { ChangeEvent } from "react";
import ListDomain from "../../../domain/list";

const useSearchHooks = () => {
  const [searchFormValue, setSearchFormValue] = useRecoilState(searchForm);
  const setsearchResultListValue = useSetRecoilState(searchResultList);
  const listDomain = new ListDomain();

  const changeFormElement =
    (type: "country" | "category" | "q") =>
    (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setSearchFormValue((oldSearchValue) => ({
        ...oldSearchValue,
        [type]: event.target?.value,
      }));
    };

  const onChangeCountryHandler = changeFormElement("country");
  const onChangeCategoryHandler = changeFormElement("category");
  const onChangeQHandler = changeFormElement("q");

  const clickSearchButtonHandler = async () => {
    const response = await listDomain.getNewsList(searchFormValue);
    setsearchResultListValue(response);
  };

  return {
    searchFormValue,
    onChangeCountryHandler,
    onChangeCategoryHandler,
    onChangeQHandler,
    clickSearchButtonHandler,
  };
};

export default useSearchHooks;
