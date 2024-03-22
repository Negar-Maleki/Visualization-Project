import styled from "styled-components";

function Sidebar() {
  const Sidebar = styled.div`
    background-color: #968787;
    grid-column: 1/2;
    grid-row: 2/-2;

    @media screen and (max-width: 48em) {
      display: none;
    }
  `;
  return <Sidebar>Sidebar</Sidebar>;
}

export default Sidebar;
