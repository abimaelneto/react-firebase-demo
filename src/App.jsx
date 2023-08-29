import { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state) => ({ ...state, [name]: value }));
  }
  handleSubmit() {
    const { email, password } = this.state;
    if (email != "email_legal@bol.com" || password != "senhaforte") {
      this.setState({ message: "Usuário ou senha incorretos" });
      return;
    }
    this.setState({ message: "Acessado com sucesso!" });
  }
  render() {
    return (
      <>
        <h1>Login</h1>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
        />

        <div className="card">
          <button onClick={this.handleSubmit}>Login</button>
          <p>{this.state.message}</p>
        </div>
      </>
    );
  }
}

export default App;
