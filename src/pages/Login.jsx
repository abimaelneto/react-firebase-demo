import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/User";

export const Login = () => {
  const auth = getAuth();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      setUser(res.user);
      navigate("/principal");
    } catch (err) {
      console.log(err);
      setError("Usuário não cadastrado");
    }
  };

  const loginStyles = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={loginStyles}>
        <label>
          Email
          <input value={data?.email} name="email" onChange={handleChange} />
        </label>
        <label>
          Senha
          <input
            value={data?.password}
            name="password"
            onChange={handleChange}
          />
        </label>
      </div>
      <button>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};
