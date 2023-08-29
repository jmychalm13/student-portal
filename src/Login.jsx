import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="container w-screen grid h-screen place-items-center">
      <div className="rounded-xl h-1/3 w-3/6 login-container grid place-items-center">
        <div className="container pl-4">
          <h1 className="pb-3 text-center">Login</h1>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="pr-3 pb-3">
              Email: <input name="email" type="email" className="rounded" />
            </div>
            <div className="pb-3 pr-3">
              Password: <input name="password" type="password" className="rounded" />
            </div>
            <div className="flex flex-col items-center">
              <button type="submit" className="btn border mt-2 rounded px-3 py-px">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
