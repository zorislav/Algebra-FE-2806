import React from "react";
import PropTypes from "prop-types";

class UserForm extends React.Component {
  state = { userName: "" };

  handleUserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  handleUserSelected = (event) => {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;

    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <form onSubmit={this.handleUserSelected}>
        <div style={styles.container}>
          <label htmlFor="name" style={styles.label}>
            GitHub username:
          </label>
          <br />
          <input
            id="name"
            style={styles.input}
            placeholder="e.g. facebook"
            onChange={this.handleUserChange}
            value={userName}
            autoFocus
          />

          <button
            style={styles.button}
            onClick={this.handleUserSelected}
            type="submit"
          >
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
  button: {
    marginTop: 20,
    width: "100%",
  },
  input: {
    marginTop: 10,
    width: "100%",
    boxSizing: "border-box"
  },
  label: {
    fontWeight: "bold",
  },
};

UserForm.propTypes = {
  setUser: PropTypes.func,
};
