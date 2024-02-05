import {
  UserInfo,
  UserImg,
  UserComment,
  UserName,
  UserInfoWrapper,
} from "../style/CommentListStyle";

const CommentItem = ({ letter }) => {
  // kR로 날짜표시
  // const specificDate = new Date(item.createdAt);
  // specificDate.toLocaleDateString();
  const todayTime = new Date(letter.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <UserInfoWrapper>
      <UserInfo>
        <UserImg>
          <img src={letter.avatar} alt="유저 프로필 이미지" />
        </UserImg>
        <UserName>
          <p>{letter.nickname}</p>
          <p>{todayTime}</p>
        </UserName>
      </UserInfo>
      <UserComment>{letter.content}</UserComment>
    </UserInfoWrapper>
  );
};

export default CommentItem;
