import React, { useState } from "react";
import styled from "styled-components";

const Nav = ({ activeItem, setActiveItem }) => {
  const activeItemHandler = (e) => {
    setActiveItem(e.target.textContent);
  };

  const Nav = styled.nav`
    margin-top: 20px;
  `;

  const NavTep = styled.ul`
    background-color: #ffffff75;
    box-shadow: 0.1px 1px 5px black;
    border-radius: 10px;
    padding: 1.2rem;
    display: flex;
    justify-content: space-around;
  `;

  const NavTepItem = styled.li`
    ${(props) =>
      props.$activeItem === props.children
        ? "background-color:#0682f0"
        : "background-color:#0072d2"};
    ${(props) =>
      props.$activeItem === props.children ? "font-weight: bold" : "none"};
    color: white;
    padding: 1rem;
    width: 100px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
  `;

  return (
    <Nav>
      <NavTep>
        <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
          차은우
        </NavTepItem>
        <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
          송강
        </NavTepItem>
        <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
          김유정
        </NavTepItem>
        <NavTepItem onClick={activeItemHandler} $activeItem={activeItem}>
          한소희
        </NavTepItem>
      </NavTep>
    </Nav>
  );
};

export default Nav;
