import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const MenuStyle = styled.div`
    display: block;
    z-index: 100;
    justify-self: start;
    align-self: center;
    margin-right: 1em;
    cursor: pointer;

    ul {
      list-style: none;
      width: ${isOpen ? "100% " : "none"};
      position: ${isOpen ? "absolute" : "none"};
      background-color: ${isOpen ? "#e1d4d457" : "none"};
      margin-right: ${isOpen ? "1em" : "none"};
      display: ${isOpen ? "grid" : "none"};
      top: ${isOpen ? "100% " : "none"};
    }
    a {
      color: inherit;
      text-decoration: none;
      text-transform: uppercase;
    }
    a:hover {
      color: aliceblue;
    }

    @media screen and (min-width: 48em) {
      ul {
        display: grid;
        grid-auto-flow: column;
        gap: 10px;
      }
      div {
        display: none;
      }
    }
  `;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuStyle ref={menuRef}>
      <div onClick={toggleMenu}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </MenuStyle>
  );
}

export default HamburgerMenu;
