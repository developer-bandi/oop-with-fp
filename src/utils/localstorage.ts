export const getDataFromLocalStorage = <T>(key: string) => {
  const data = window.localStorage.getItem(key);
  const parsedData = data === null ? [] : (JSON.parse(data) as T);

  return parsedData;
};

export const setDataFromLocalStorage = (key: string, data: unknown) => {
  const stringifiedData = JSON.stringify(data);
  window.localStorage.setItem(key, stringifiedData);
};
