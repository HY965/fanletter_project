import {
  CardLists,
  UserInfo,
  UserImg,
  UserComment,
  UserName,
  UserInfoWrapper,
} from "../style/CommentListStyle";

const CommentItem = ({ item }) => {
  // const omissionContent = (item) => {
  //   const contentLength = 20;
  //   if (item.content > contentLength) {
  //     item.content = item.content.substr(0, contentLength - 2) + "...";
  //   }
  //   return;
  // };

  return (
    <CardLists>
      <UserInfoWrapper>
        <UserInfo>
          <UserImg>
            <img src={item.avatar} alt="유저 프로필 이미지" />
          </UserImg>
          <UserName>
            <p>{item.nickname}</p>
            <p>{item.createdAt}</p>
          </UserName>
        </UserInfo>
        <UserComment>{item.content}</UserComment>
      </UserInfoWrapper>
    </CardLists>
  );
};

export default CommentItem;
