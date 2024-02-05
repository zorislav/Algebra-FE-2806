import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";

import { UserForm, GithubUser, GithubRepos } from "./components";
import { getRepos, RESET } from "./store/redux-store";

import "./App.css";

function App() {
  const repos = useSelector((state) => state.repos);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function getData(userName) {
    dispatch(getRepos(userName));
  }

  function handleResetUser() {
    dispatch({ type: RESET });
  }

  if (!user) {
    return (
      <div className="app">
        <UserForm setUser={getData} />
      </div>
    );
  }

  return (
    <div className="app">
      <GithubUser user={user} />
      <GithubRepos repos={repos} />
      <div className="d-grid gap-2">
        <Button
          onClick={handleResetUser}
          type="submit"
          size="lg"
          variant="secondary"
          className="mt-5"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
