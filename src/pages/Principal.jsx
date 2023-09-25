import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/User";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Principal = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const fetchUser = async () => {
    const q = query(collection(db, "users"), where("id", "==", user.uid));
    const res = await getDocs(q);
    res.forEach((doc) => console.log(doc.data()));
    setData(res.docs[0].data());
  };
  useEffect(() => {
    if (!user.uid) return navigate("/login");
    fetchUser();
  }, [user]);

  const dataStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20rem",
  };
  return (
    <>
      <h1>Dados</h1>
      <div>
        <div style={dataStyle}>
          <h3>Nome</h3>
          <p>{data?.firstName}</p>
        </div>
        <div style={dataStyle}>
          <h3>Sobrenome</h3>
          <p>{data?.lastName}</p>
        </div>
        <div style={dataStyle}>
          <h3>Data de Nascimento</h3>
          <p>{data?.birth}</p>
        </div>
        <div style={dataStyle}>
          <h3>Email</h3>
          <p>{data?.email}</p>
        </div>
      </div>
      <button onClick={() => setUser({})}>Sair</button>
    </>
  );
};
