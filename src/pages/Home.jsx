import Header from "../components/Header";
import Nav from "../components/Nav";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { useState } from "react";
import fakeData from "../shared/fakeData.json";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [letter, setLetter] = useState(fakeData);
  const [activeItem, setActiveItem] = useState("권혁우 튜터님");

  const Mainstyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <>
      <Header />
      <Nav activeItem={activeItem} setActiveItem={setActiveItem} />
      <Mainstyle>
        <CommentForm setLetter={setLetter} />
        <CommentList activeItem={activeItem} letter={letter} />
      </Mainstyle>
    </>
  );
};

export default Home;
