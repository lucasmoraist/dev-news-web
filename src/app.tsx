import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageDefault } from "./components/pageDefault";
import { Home } from "./pages/home";
import { Post } from "./pages/post";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}
