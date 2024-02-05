import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const Profile = styled.div`
    background-color: #ccc;
    width: 400px;
    padding: 1.5rem;
  `;
  return (
    <>
      <Profile>
        <p>OOO 튜터님에게 한마디..</p>
        <img src={null} alt="튜터님들 프로필사진" />
      </Profile>

      <article>
        <p>댓글창입니당</p>
        <button>수정</button>
        <button>삭제</button>
      </article>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        main으로 가기
      </button>
    </>
  );
}

export default Detail;
