import { LoginInput } from "components";
import axios from "../utils/axios";
import { logo } from "assets";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAtom } from "global";

export default function Index() {
  const [processing, setProcessing] = useState(false);
  const [, setUser] = useAtom(userAtom);
  const navigate = useNavigate();
  return (
    <div className="login__container">
      <form
        className="login__container__form"
        onSubmit={(e) => {
          e.preventDefault();
          setProcessing(true);
          if (e.target.email.value === "" || e.target.password.value === "") {
            alert("Please fill all the fields");
            setProcessing(false);
            return;
          } else if (e.target.email.value === "") {
            alert("Please fill email field");
            setProcessing(false);
            return;
          } else if (e.target.password.value === "") {
            alert("Please fill password field");
            setProcessing(false);
            return;
          } else {
            axios
              .post("/users/login", {
                email: e.target.email.value,
                password: e.target.password.value,
              })
              .then((res) => {
                setProcessing(false);
                setUser({
                  name: res.data.email,
                });
                navigate("/dashboard", { replace: true });
              });
          }
        }}
      >
        <img
          loading="lazy"
          src={logo}
          alt="logo"
          className="login__container__form__logo"
        />
        <LoginInput
          label="Email"
          placeholder="Enter email"
          type="email"
          id="email"
        />
        <LoginInput
          label="Password"
          placeholder="Enter password"
          type="password"
          id="password"
        />
        <button type="submit" className="login__container__form__button">
          {processing ? "please wait...." : "Login"}
        </button>
      </form>
    </div>
  );
}
