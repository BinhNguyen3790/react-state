import { Component } from "react";

class RenderState extends Component {
  state = {
    is_login: false,
  };

  useName = "Kevin";

  handleLogin = () => {
    let new_login = {
      is_login: true,
    };
    this.setState(new_login, () => {
      console.log(this.state.is_login);
    });
  };

  renderUse = () => {
    if (this.state.is_login) {
      return <h1>Hello {this.useName}</h1>;
    } else {
      return (
        <button
          onClick={() => {
            this.handleLogin();
          }}
        >
          Login
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderUse()}</div>;
  }
}

export default RenderState;
