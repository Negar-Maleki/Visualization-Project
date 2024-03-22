import styled from "styled-components";

function Main({ children }) {
  const MainLayout = styled.div`
    padding: 2em 2em;
    background-color: #ae9d9d4a;
    height: 100%;
    grid-column: 2/-1;

    grid-row: 2 / -2;

    @media screen and (max-width: 48em) {
      /* grid-column: 1/-1;
      */

      grid-row: auto;
      grid-column: auto;

      max-height: 100%;
    }
  `;

  return <MainLayout>{children}</MainLayout>;
}

export default Main;
