import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

function Detail({ letter, setLetter }) {
  const { id } = useParams();

  const letterDetail = letter.find((letter) => letter.id === id);
  const { nickname, createdAt, content, avatar, writedTo } = letterDetail;

  const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    border: 2px solid red;
  `;

  const MainBtnWrapper = styled.div`
    position: absolute;
    bottom: -60px;
    border: 2px solid red;
  `;

  const MainBtn = styled.button`
    background-color: #0072d2;
    color: #f9f9f9;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    padding: 0.6rem 0.4rem;
    min-height: 3rem;
    cursor: pointer;
  `;

  const DetailWrapper = styled.section`
    width: 400px;
    color: white;
  `;
  const UserComment = styled.div`
    background-color: white;
    color: black;
    width: 400px;
    padding: 1.5rem;
    border: 2px solid red;
  `;
  const UserInfo = styled.div`
    background-color: #004caf;
    padding: 1rem;

    border: 2px solid red;
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    padding: 1.4rem;
    border: 3px solid red;
    margin-top: 50px;
  `;

  const UserImg = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
  `;

  //ChangeAndDeleteBtn
  const clickRemoveButtonHandler = () => {
    const newLetters = letter.filter((letters) => letter.id !== id);
    setLetter(newLetters);
  };

  return (
    <Container>
      <MainBtnWrapper>
        <Link to="/">
          <MainBtn type="text">main으로 가기</MainBtn>
        </Link>
      </MainBtnWrapper>

      <DetailWrapper>
        <UserInfo>
          <UserImg src={avatar} />
          <p>닉네임: {nickname}</p>
          <p>시간: {createdAt}</p>
        </UserInfo>
        <p>TO: {writedTo}</p>
        <UserComment>{content}</UserComment>

        <ButtonWrapper>
          <button>수정</button>
          <button onClick={clickRemoveButtonHandler}>삭제</button>
        </ButtonWrapper>
      </DetailWrapper>
    </Container>
  );
}

export default Detail;
