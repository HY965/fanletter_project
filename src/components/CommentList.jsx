import CommentItem from "./CommentItem";
import { CardLists } from "../style/CommentListStyle";
import { useNavigate } from "react-router-dom";

const CommentList = ({ activeItem, letter }) => {
  const navigate = useNavigate();
  const navlist = () => {};
  return (
    <CardLists
      onClick={() => {
        navigate(`/detail/${letter.id}`);
      }}
    >
      {letter
        .filter((letter) => letter.writedTo === activeItem)
        .map((letter) => (
          <div key={letter.id}>
            <CommentItem letter={letter} />
          </div>
        ))}
    </CardLists>
  );
};

export default CommentList;
