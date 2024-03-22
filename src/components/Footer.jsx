import styled from "styled-components";

function Footer() {
  const FooterStyle = styled.div`
    background-color: #d5cdc2;
    grid-row: -1;
    grid-column: 1/-1;
  `;

  return <FooterStyle>footer</FooterStyle>;
}

export default Footer;
