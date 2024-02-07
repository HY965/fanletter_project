import styled from "styled-components";
import tutor01 from "assets/tutor01.png";
import { useState } from "react";

const CommentProfile = ({ activeItem, letter, id, setLetter }) => {
  const [profile, setProtile] = useState("");
  const filterProfile = letter.filter(
    (letter) => letter.writdeTo === activeItem
  );

  const eimgMap = () => {
    const newLetter = letter.map((letter) => {
      if (letter.id === id) {
        return { ...letter, profile: tutor01 };
      }
      return letter;
    });
    setLetter(newLetter);
  };

  const ProfileInfo = styled.div`
    background-color: #ccc;
    width: 650px;
    height: 200px;
    margin-top: 20px;
    display: flex;
  `;

  // const Img = styled.img`
  //   height: 200px;
  //   width: 200px;
  //   overflow: hidden;
  // `;

  const Title = styled.h2`
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
  `;
  //key={letter.id} letter={letter}
  return (
    <>
      <ProfileInfo>
        {filterProfile.map((letter) => (
          <div>
            {/* <img src={letter.profile} alt="튜터님 프로필사진" /> */}
            {/* <Title>한마디...하슈</Title> */}
            <p>안녕하세요</p>
          </div>
        ))}
      </ProfileInfo>
    </>
  );
};

export default CommentProfile;
