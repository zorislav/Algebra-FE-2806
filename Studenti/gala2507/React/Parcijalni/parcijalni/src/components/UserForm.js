import React from "react";

class UserForm extends React.Component {
  state = {
    userName: "",
  };

  handleUserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  handleUserSelected = (event) => {
    event.preventDefault();
    const { userName } = this.state;
    const { setUser } = this.props;

    // if(!userName.trim()) {
    //  alert("Please enter user name");
    // }

    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <form onSubmit={this.handleUserSelected}>
        <div style={styles.container}>
          <label htmlFor="name" style={styles.label}>
            Github username:
          </label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="e.g. facebook"
            value={userName}
            onChange={this.handleUserChange}
            autofocus
            style={styles.input}
          />
          <button style={styles.button} type="submit">
            GO!
          </button>
        </div>
      </form>
    );
  }
}

export default UserForm;

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
  },

  label: {
    fontWeight: "bold",
  },

  input: {
    marginTop: 10,
    width: "100%",
    boxSizing: "border-box",
  },

  button: {
    marginTop: 20,
    width: "100%",
  },
};
