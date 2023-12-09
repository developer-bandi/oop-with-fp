import useListHooks from "./hooks";

const List = () => {
  const { searchResultListValue } = useListHooks();

  return (
    <div>
      {searchResultListValue.map(
        ({ title, content, publishedAt, url, image, author, like }) => {
          return (
            <div key={title}>
              <div>{title}</div>
              <div>{content}</div>
              <div>{publishedAt}</div>
              <div>{url}</div>
              <div>{image}</div>
              <div>{author}</div>
              <div>{like ? "좋아요" : "싫어요"}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default List;
