import { useState } from "react";

import { GitHubApi } from "./services";
import { UserForm, GitHubUser, GitHubRepos } from "./components";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  function getData(userName) {
    Promise.all([
      GitHubApi.fetchUser(userName),
      GitHubApi.fetchUserRepos(userName),
    ])
      .then(([user, repos]) => {
        setUser(user);
        setRepos(repos);
      })
      .catch((error) => alert(error));
  }

  function handleResetUser() {
    setUser(null);
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
      <GitHubUser user={user} />
      <GitHubRepos repos={repos} />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleResetUser}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

const styles = {
  buttonContainer: {
    textAlign: "center",
  },

  button: {
    marginTop: 20,
    width: "100%",
  },
};
