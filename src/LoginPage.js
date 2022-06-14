import React, { useState, useContext } from "react";
import { Context } from "./Store";

function LoginPage() {
  const [loggedin, setLoggedin] = useContext(Context);
  const [userId, setUserID] = useState("");
  const [errUserID, setErrUserID] = useState("");
  const [password, setPassword] = useState("");
  const [errPass, setErrPass] = useState("");
  const [user, setUser] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (userId !== "" && password !== "") {
      fetch(`https://retoolapi.dev/B13laa/getusers?user_id=${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data[0]);
          const cPass = data[0].password;
          if (cPass !== password) {
            setErrPass("wrong password...");
          } else {
            setLoggedin(true);
          }
        })
        .catch((e) => {
          setErrUserID("user not exist...");
        });
    }
  };
  return (
    <div className="w-100 h-[100vh] p-[20px] place-items-center grid bg-[linear-gradient(to_right,#8e2de2,#4a00e0)]">
      <form
        onSubmit={handleLogin}
        className="bg-white p-[20px] rounded shadow-md"
      >
        <h2 className="mb-[20px] text-[1.6em] font-bold">Login</h2>
        <div className="mb-6">
          <label>User Id</label>
          <input
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            type={"email"}
            value={userId}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
          <span className="text-rose-600">{errUserID}</span>
        </div>

        <div className="mb-6">
          <label>Password</label>
          <input
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="text-rose-600">{errPass}</span>
        </div>
        <input
          className="cursor-pointer inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type={"submit"}
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginPage;
