import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const Navbar = styled.div`
    background-color: #e1d4d4;
    grid-column: 1/-1;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    z-index: 100;
    position: relative;
    h1 {
      align-self: center;
      justify-self: end;
    }
  `;

  return (
    <Navbar>
      <HamburgerMenu />
      <h1>Logo</h1>
    </Navbar>
  );
}

export default Navbar;
