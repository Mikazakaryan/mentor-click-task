import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Login from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Matches from "./pages/Matches";
import Profile from "./pages/Profile";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const user = useSelector((state: RootState) => state.user);

  const location = useLocation();

  if (!user.id) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

const App = () => {
  const matches = useSelector((state: RootState) => state.matches);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/matches" state={{ from: "/" }} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/matches"
          element={
            <RequireAuth>
              <Matches editable defaultSelected={matches} />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
