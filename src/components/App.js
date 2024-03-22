import styled from "styled-components";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "./Table";
import Contents from "./Contents";
import Footer from "./Footer";

function App() {
  const AppLayout = styled.div`
    width: max(70%, 48em);

    @media screen and (min-width: 48em) {
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      grid-template-columns: repeat(auto-fit, minmax(25rem, auto));
      width: 100%;
      height: 100vh;
    }
  `;

  return (
    <AppLayout>
      <Navbar />
      <Sidebar />
      <Main>
        <Table />
        <Contents />
      </Main>
      <Footer />
    </AppLayout>
  );
}

export default App;
