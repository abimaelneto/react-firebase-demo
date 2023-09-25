import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const Cadastro = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await addDoc(collection(db, "users"), { ...data, id: res.user.uid });
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Houve um problema ao cadastrar o usuário. Tente novamente!");
    }
  };
  const inputStyle = {
    display: "flex",
    width: "20rem",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1rem",
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={inputStyle}>
          Email
          <input value={data?.email} name="email" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label style={inputStyle}>
          Senha
          <input
            type="password"
            value={data?.password}
            name="password"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label style={inputStyle}>
          Nome
          <input
            value={data?.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label style={inputStyle}>
          Sobrenome
          <input
            value={data?.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label style={inputStyle}>
          Data de Nascimento
          <input
            type="date"
            value={data?.birth}
            name="birth"
            onChange={handleChange}
          />
        </label>
      </div>
      <Link to="/login">
        <button>Já tenho Cadastro</button>
      </Link>
      <button>Cadastrar</button>
      {error && <p>{error}</p>}
    </form>
  );
};
