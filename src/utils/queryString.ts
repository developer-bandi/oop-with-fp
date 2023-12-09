export const getQueryString = (queryObject: object) => {
  console.log(queryObject);

  return (
    Object.entries(queryObject)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
};
