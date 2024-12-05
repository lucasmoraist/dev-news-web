import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageDefault } from "./components/pageDefault";
import { Home } from "./pages/home";
import { Post } from "./pages/post";
import { SignUp } from "./pages/auth/signup";
import { SignIn } from "./pages/auth/signin";
import { NewPost } from "./pages/new-post";
import { Profile } from "./pages/profile";
import { PrivateRoute } from "./components/privateRoute";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/new-post" element={<NewPost />} />
        </Route>
      </Routes>
    </Router>
  );
}
