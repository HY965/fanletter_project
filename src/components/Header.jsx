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
      <HeaderName>안녕하세요 팬레터 콜렉션 입니다.</HeaderName>
      <p>초코 붕어싸만코 고트다. 반박시 붕어신</p>
    </HeaderBox>
  );
};

export default Header;
