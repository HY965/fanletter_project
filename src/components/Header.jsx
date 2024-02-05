import styled from "styled-components";
const Header = () => {
  const HeaderBox = styled.header`
    height: 150px;
    background-color: black;
    border-radius: 10px;
    padding: 3rem;
    color: #f9f9f9;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const HeaderName = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem;
  `;

  return (
    <HeaderBox>
      <HeaderName>★네베캠 4기 react 튜터님 팬레터함 입니다★</HeaderName>
      <p>어렵다 어려워...ㅜㅜ 이게 맞나?</p>
    </HeaderBox>
  );
};

export default Header;
