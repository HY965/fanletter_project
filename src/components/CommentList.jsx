import CommentItem from "./CommentItem";
import fakeData from "../shared/fakeData.json";

const CommentList = ({ activeItem }) => {
  return (
    <>
      {fakeData
        .filter((item) => item.writedTo === activeItem)
        .map((item) => (
          <div key={item.id}>
            <CommentItem item={item} />
          </div>
        ))}
    </>
  );
};

export default CommentList;
