import CommentItem from "./CommentItem";
import { CardLists } from "../style/CommentListStyle";

const CommentList = ({ activeItem, letter }) => {
  const filterLetter = letter.filter(
    (letter) => letter.writedTo === activeItem
  );

  return (
    <CardLists>
      {filterLetter.length === 0 ? <p>없어용 추가해주세요!</p> : null}
      {filterLetter.map((letter) => (
        <CommentItem key={letter.id} letter={letter} />
      ))}
    </CardLists>
  );
};

export default CommentList;
