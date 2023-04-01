import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NftViewer from "./Components/NftViewer";
import Home from "./Components/Home";
import Royalties from "./Components/Royalties";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route path="/nftviewer" element={<NftViewer />} />
          <Route path="/royalities" element={<Royalties />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;