import { useRecoilState, useRecoilValue } from "recoil";
import { searchForm, searchResultList } from "../store";
import { useEffect } from "react";
import ListDomain from "../../../domain/list";

const useListHooks = () => {
  const [searchResultListValue, setsearchResultListValue] =
    useRecoilState(searchResultList);
  const searchFormValue = useRecoilValue(searchForm);
  const listDomain = new ListDomain();

  useEffect(() => {
    listDomain.getNewsList(searchFormValue).then((res) => {
      setsearchResultListValue(res);
    });
  }, []);

  return { searchResultListValue };
};

export default useListHooks;
