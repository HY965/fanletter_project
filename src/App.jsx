import Globalstyle from "./style/Globalstyle";
import Header from "./components/Header";
import Nav from "./components/Nav";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import { useState } from "react";
import uuid from "react-uuid";

const App = () => {
  const [activeItem, setActiveItem] = useState("차은우");

  const [thanksComments, setThanksComments] = useState([
    {
      id: uuid(),
      nickname: "홍길동",
      content: "내용입니다.",
      createdAt: "",
      avatar: null,
      writedTo: activeItem,
    },
  ]);

  return (
    <>
      <Globalstyle />
      <Header />
      <Nav activeItem={activeItem} setActiveItem={setActiveItem} />
      <main>
        <CommentForm />
        <CommentList activeItem={activeItem} setActiveItem={setActiveItem} />
      </main>
    </>
  );
};

export default App;
