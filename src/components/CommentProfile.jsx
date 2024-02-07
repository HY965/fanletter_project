import styled from "styled-components";
import tutor01 from "assets/tutor01.png";

const CommentProfile = ({ activeItem, letter }) => {
  // const [profile, setProtile] = useState("");
  const filterProfile = letter.filter(
    (letter) => letter.writdeTo === activeItem
  );

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

  return (
    <>
      <ProfileInfo>
        {filterProfile.map((letter) => (
          <div key={letter.id} letter={letter}>
            <img src={tutor01} alt="튜터님 프로필사진" />
            <Title>한마디...하슈</Title>
          </div>
        ))}
      </ProfileInfo>
    </>
  );
};

export default CommentProfile;
