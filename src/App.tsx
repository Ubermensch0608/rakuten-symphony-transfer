import Container from "components/layout/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import GlobalStyle from "styles/GlobalStyle";
import useAxios from "hooks/useAxios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LinkDataType } from "types/linkTypes";

function App() {
  const linkData = useAxios<LinkDataType[] | null>(
    "https://storage-fe.fastraffic.io/homeworks/links"
  );
  if (!linkData) return null;
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LinkPage linkData={linkData} />} />
          <Route path="/:key" element={<DetailPage linkData={linkData} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
