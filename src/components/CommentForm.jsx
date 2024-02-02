import uuid from "react-uuid";
import { useState } from "react";
import {
  InputWrapper,
  InputList,
  InputNameAndComment,
  InputTitle,
  InputInfo,
  InputCommentInfo,
  AddbuttonWrapper,
  Addbutton,
} from "../style/CommentFormStyle";

const CommentForm = ({ activeItem, thanksComments, setThanksComments }) => {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const nicknameChangeHandler = (event) => {
    setNickname(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nickname || !content) {
      return alert("필수 값을 입력하세요");
    }

    const newComment = {
      id: uuid(),
      nickname,
      content,
      createdAt,
      avatar: null,
      writedTo: activeItem,
    };
    setThanksComments((prevComment) => [...thanksComments, newComment]);

    e.target.reset();
  };

  return (
    <InputWrapper>
      <InputList onSubmit={handleSubmit}>
        <InputNameAndComment>
          <InputTitle>닉네임:</InputTitle>
          <InputInfo
            onChange={nicknameChangeHandler}
            value={nickname}
            type="text"
            placeholder="닉네임을 적어주세요."
            name="user-name"
          />
        </InputNameAndComment>
        <InputNameAndComment>
          <InputTitle>내용:</InputTitle>
          <InputCommentInfo
            onChange={contentChangeHandler}
            value={content}
            type="text"
            placeholder="내용을 적어주세요."
            name="comment"
          />
        </InputNameAndComment>
        <InputNameAndComment>
          <p>누구에게 보내실 건가요?</p>
          <select>
            <option>차은우</option>
            <option>송강</option>
            <option>김유정</option>
            <option>한소희</option>
          </select>
        </InputNameAndComment>
        <AddbuttonWrapper>
          <Addbutton type="submit">팬레터 등록</Addbutton>
        </AddbuttonWrapper>
      </InputList>
    </InputWrapper>
  );
};

export default CommentForm;
