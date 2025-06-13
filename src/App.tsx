import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./app/page";
import Layout from "./app/layout";

//import SignUpPage from "./app/signup/page";
//import PrivacyPolicy from "./components/privacy";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
